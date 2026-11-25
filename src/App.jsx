import Sidebar from "./components/Sidebar";
import "./styles/layout.css";

// The sections of the page are added in the next steps
function App() {
	const setTheme = (theme) => {
		document.documentElement.dataset.theme = theme;
	};

	return (
		<div className="site">
			<Sidebar />
			<main className="site__main" id="main">
				<p>Temporary theme test:</p>
				<button onClick={() => setTheme("light")}>Light</button>
				<button onClick={() => setTheme("dark")}>Dark</button>
				<button onClick={() => setTheme("reading")}>Reading</button>
			</main>
		</div>
	);
}

export default App;