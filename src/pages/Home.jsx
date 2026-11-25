import About from "../components/About";
import Journey from "../components/Journey";
import SectionNav from "../components/SectionNav";

// The homepage: the menu, then each section in order
function Home() {
	return (
		<>
			<SectionNav />
			<About />
			<Journey />
		</>
	);
}

export default Home;