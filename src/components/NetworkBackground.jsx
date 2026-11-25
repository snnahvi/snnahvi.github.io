import { useEffect, useRef } from "react";

// True when motion should be reduced: chosen in the accessibility menu,
// or set on the device when the visitor hasn't chosen
function isMotionReduced() {
	const choice = document.documentElement.dataset.motion;
	if (choice) return choice === "reduce";
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Slowly drifting dots joined by faint lines, drawn behind the sidebar.
// Shows a still picture when motion is reduced.
function NetworkBackground() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		let width = 0;
		let height = 0;
		let dots = [];
		let frame = null;

		const draw = () => {
			context.clearRect(0, 0, width, height);
			dots.forEach((a, i) => {
				for (let j = i + 1; j < dots.length; j++) {
					const b = dots[j];
					const distance = Math.hypot(a.x - b.x, a.y - b.y);
					if (distance < 110) {
						context.strokeStyle = `rgba(148, 163, 184, ${0.28 * (1 - distance / 110)})`;
						context.beginPath();
						context.moveTo(a.x, a.y);
						context.lineTo(b.x, b.y);
						context.stroke();
					}
				}
				context.fillStyle = "rgba(148, 163, 184, 0.55)";
				context.beginPath();
				context.arc(a.x, a.y, 1.6, 0, Math.PI * 2);
				context.fill();
			});
		};

		const resize = () => {
			const ratio = window.devicePixelRatio || 1;
			width = canvas.offsetWidth;
			height = canvas.offsetHeight;
			canvas.width = width * ratio;
			canvas.height = height * ratio;
			context.setTransform(ratio, 0, 0, ratio, 0, 0);
			const count = Math.round((width * height) / 9000);
			dots = Array.from({ length: count }, () => ({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - 0.5) * 0.25,
				vy: (Math.random() - 0.5) * 0.25,
			}));
			draw();
		};

		const step = () => {
			if (isMotionReduced()) {
				draw();
				frame = null;
				return;
			}
			dots.forEach((dot) => {
				dot.x += dot.vx;
				dot.y += dot.vy;
				if (dot.x < 0 || dot.x > width) dot.vx *= -1;
				if (dot.y < 0 || dot.y > height) dot.vy *= -1;
			});
			draw();
			frame = requestAnimationFrame(step);
		};

		// Start moving again if the visitor turns reduced motion off
		const observer = new MutationObserver(() => {
			if (!frame && !isMotionReduced()) step();
		});

		resize();
		step();
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-motion"] });
		window.addEventListener("resize", resize);

		return () => {
			cancelAnimationFrame(frame);
			observer.disconnect();
			window.removeEventListener("resize", resize);
		};
	}, []);

	return <canvas ref={canvasRef} className="network-background" aria-hidden="true" />;
}

export default NetworkBackground;