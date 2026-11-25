import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";

import "./CopyEmail.css";

// Email address with a button that copies it and says "Copied" for two seconds
function CopyEmail({ email }) {
	const [copied, setCopied] = useState(false);
	const timer = useRef(null);

	useEffect(() => () => clearTimeout(timer.current), []);

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(email);
		} catch {
			return;
		}
		setCopied(true);
		clearTimeout(timer.current);
		timer.current = setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="copy-email">
			<a href={`mailto:${email}`}>{email}</a>
			<button type="button" onClick={copy}>
				<FontAwesomeIcon icon={copied ? faCheck : faCopy} />
				{copied ? "Copied" : "Copy"}
			</button>
			<span className="sr-only" role="status">
				{copied ? "Email address copied" : ""}
			</span>
		</div>
	);
}

export default CopyEmail;