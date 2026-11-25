// Temporary page to check that fonts and themes work
function App() {
	const setTheme = (theme) => {
		document.documentElement.dataset.theme = theme;
	};

	return (
		<main style={{ padding: "40px", maxWidth: "640px" }}>
			<h1>Sana Nahvi</h1>
			<p>
				Body text in Atkinson Hyperlegible, with a <a href="#">raspberry link</a>.
			</p>
			<button onClick={() => setTheme("light")}>Light</button>
			<button onClick={() => setTheme("dark")}>Dark</button>
			<button onClick={() => setTheme("reading")}>Reading</button>
		</main>
	);
}

export default App;