import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import "./styles/layout.css";

function App() {
	// Temporary: removed when the accessibility menu is added
	const setTheme = (theme) => {
		document.documentElement.dataset.theme = theme;
	};

	return (
		<div className="site">
			<Sidebar />
			<main className="site__main" id="main">
				<Home />
				<p>
					Temporary theme test:{" "}
					<button onClick={() => setTheme("light")}>Light</button>
					<button onClick={() => setTheme("dark")}>Dark</button>
					<button onClick={() => setTheme("reading")}>Reading</button>
				</p>
			</main>
		</div>
	);
}

export default App;