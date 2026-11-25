import About from "../components/About";
import Journey from "../components/Journey";
import Projects from "../components/Projects";
import SectionNav from "../components/SectionNav";

// The homepage: the menu, then each section in order
function Home() {
	return (
		<>
			<SectionNav />
			<About />
			<Journey />
			<Projects />
		</>
	);
}

export default Home;