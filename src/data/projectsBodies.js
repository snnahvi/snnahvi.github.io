import "./projectBodies.css";
import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProjectBody01 = () => {
	const [activeTab, setActiveTab] = useState("Donut");

	// ---------- TAB CONTENT SWITCHER ----------
	const renderTabContent = () => {
		switch (activeTab) {
			// ---------------- DONUT SCENARIO ----------------
			case "Donut":
				return (
					<>
						<div className="heading-1">Donut Scenario</div>
						<br />
						In this scenario, the child needs to cross the street to
						reach a donut shop. The main goal is to encourage safe,
						deliberate behavior before and during crossing.
						<br />
						<br />
						<strong>Positive behaviors (score increases):</strong>
						<ul>
							<li>
								Looking left and right before crossing, and
								again in the middle of the street.
							</li>
							<li>Using the crosswalk.</li>
							<li>
								Choosing a safe character (no headphones, bright
								clothing for visibility).
							</li>
							<li>
								Crossing only when the pedestrian light turns
								green.
							</li>
							<li>
								Following the safe path marked by coins along
								the way.
							</li>
						</ul>
						<strong>Negative behaviors (score decreases):</strong>
						<ul>
							<li>
								Standing or walking on the edge or in the middle
								of the street.
							</li>
							<li>Attempting to cross during a red light.</li>
							<li>Running across the street recklessly.</li>
						</ul>
						<br />
						{/* Example GIF / media for Donut scenario */}
						<div style={{ textAlign: "center" }}>
							<figure style={{ margin: 0 }}>
								<Zoom>
									<img
										src="../donut-scenario.gif"
										alt="Donut Scenario Gameplay"
										style={{
											maxWidth: "100%",
											height: "auto",
										}}
									/>
								</Zoom>
								<figcaption
									style={{
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>
										Donut scenario: safe crossing to the
										shop
									</em>
								</figcaption>
							</figure>
						</div>
					</>
				);

			// ---------------- BALL SCENARIO ----------------
			case "Ball":
				return (
					<>
						<div className="heading-1">Ball Scenario</div>
						<br />
						In the Ball scenario, a ball rolls into the road and the
						player must decide how to retrieve it safely. The
						situation is familiar and realistic, which helps
						children understand how quickly danger can appear in
						everyday play.
						<br />
						<br />
						<strong>Positive behaviors (score increases):</strong>
						<ul>
							<li>
								Checking both directions carefully before
								stepping into the street.
							</li>
							<li>
								Selecting a safe character (no headphones,
								bright clothing), just like in the Donut
								scenario.
							</li>
							<li>
								Following the coin-guided safe path instead of
								running straight toward the ball.
							</li>
						</ul>
						<strong>Additional risk:</strong>
						<ul>
							<li>
								A collision with a truck is possible in this
								scenario, adding urgency and reinforcing the
								consequences of unsafe behavior.
							</li>
						</ul>
						<br />
						{/* Example GIF / media for Ball scenario */}
						<div style={{ textAlign: "center" }}>
							<figure style={{ margin: 0 }}>
								<Zoom>
									<img
										src="../ball-scenario.gif"
										alt="Ball Scenario Gameplay"
										style={{
											maxWidth: "100%",
											height: "auto",
										}}
									/>
								</Zoom>
								<figcaption
									style={{
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>
										Ball scenario: safely retrieving a ball
										from the road
									</em>
								</figcaption>
							</figure>
						</div>
					</>
				);

			default:
				return null;
		}
	};

	// -----------------------------------------
	// MAIN RETURN
	// -----------------------------------------
	return (
		<div>
			<p>
				Undergraduate Capstone Project &nbsp;|&nbsp; Unreal Engine 5
				&nbsp;|&nbsp; Behavioral Training &amp; HCI
			</p>

			{/* -------- Header -------- */}
			<em style={{ fontSize: "15px" }}>Last updated: 7 Dec, 2025</em>
			<div style={{ margin: "0 auto", textAlign: "center" }}>
				<figure>
					<img
						className="project-logo-header"
						src="../project_Gamification.png"
						alt="Serious Traffic Game Cover"
					/>
				</figure>
			</div>

			<br />

			{/* -------- Overview -------- */}
			<div className="heading-1">Problem Statement</div>
			<br />
			<p>
				Children often struggle to notice traffic dangers or make safe
				decisions when crossing the street, which puts them at real
				risk. Incidents like a 2021 video of a young girl running into
				the road remind us how quickly these situations can turn
				dangerous.
			</p>
			<p>
				To address this, I created a 3D serious game that gives kids a
				safe space to learn and practice proper traffic behavior. The
				goal is to help them spot hazards, choose safer routes, and
				respond calmly instead of impulsively—ultimately improving their
				real-world pedestrian safety.
			</p>
			<br />

			{/* Optional embedded media */}
			<div style={{ textAlign: "center" }}>
				<video
					src="../Media1.mp4"
					controls
					style={{ maxWidth: "100%", borderRadius: "10px" }}
				/>
				<p
					style={{
						fontSize: "13px",
						color: "#666",
						marginTop: "4px",
					}}
				>
					<em>Gameplay recording from the Serious Traffic Game</em>
				</p>
			</div>
			<br />

			{/* -------- Game Design & Evaluation Logic -------- */}
			<div className="heading-1">Game Design &amp; Evaluation Logic</div>
			<br />
			<p>
				Using Unreal Engine 5 and Blueprints, I designed an interactive
				training experience with two core scenarios—Donut and Ball—each
				focused on hazard perception and safe decision-making in
				different traffic contexts.
			</p>
			<p>
				The game includes a scoring system that tracks correct and
				incorrect behaviors in real time. Safe actions increase the
				score, while risky behaviors reduce it. This immediate feedback
				helps children understand which choices keep them safe and which
				ones put them at risk.
			</p>
			<br />

			{/* ---- Horizontal Tabs for Scenarios ---- */}
			<div style={styles.tabsContainer}>
				{["Donut", "Ball"].map((tab) => (
					<button
						key={tab}
						onClick={() => setActiveTab(tab)}
						style={{
							...styles.tabButton,
							borderBottom:
								activeTab === tab
									? "2px solid black"
									: "2px solid transparent",
							fontWeight: activeTab === tab ? "bold" : "normal",
						}}
					>
						{tab === "Donut" ? "Donut Scenario" : "Ball Scenario"}
					</button>
				))}
			</div>
			<br />
			<div style={styles.contentWrapper}>{renderTabContent()}</div>
			<br />
			<br />

			{/* -------- Implementation -------- */}
			<div className="heading-1">Implementation</div>
			<br />
			<p>
				The full implementation includes ten core systems working
				together to create a believable, educational traffic
				environment:
			</p>
			<ul>
				<li>
					Guidance messages that explain safe actions to the child
					during training.
				</li>
				<li>Coins that visually mark safe walking paths.</li>
				<li>
					Car movement logic that simulates realistic traffic while
					preventing impossible or unfair collisions.
				</li>
				<li>
					A traffic-light system controlling both player and vehicle
					behavior.
				</li>
				<li>NPC pedestrians that make the scene feel more alive.</li>
				<li>
					A scoring engine that evaluates safe and unsafe behavior in
					real time.
				</li>
				<li>
					A character-selection menu that emphasizes safety traits
					(e.g., clothing color, no headphones).
				</li>
				<li>
					Speed-control logic that encourages slow, careful movement
					instead of running into the street.
				</li>
				<li>
					Ball mechanics, including rolling, picking up, and dropping
					the ball.
				</li>
				<li>
					Game menus for navigation, scenario selection, and overall
					flow.
				</li>
			</ul>
			<br />

			{/* -------- User Study & Results -------- */}
			<div className="heading-1">User Study &amp; Results</div>
			<br />
			<p>
				I evaluated the game with 18 boys in the 2nd and 3rd grade. Each
				scenario included three phases: pre-test, training, and
				post-test. Children first played without guidance, then went
				through the training experience, and finally repeated the
				scenario to measure learning gains.
			</p>
			{/* --- Side-by-side zoomable photos --- */}
			<div
				style={{
					display: "flex",
					gap: "16px",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "flex-start",
					margin: "16px 0",
				}}
			>
				{/* FIGURE A */}
				<figure style={{ flex: "1 1 260px", margin: 0 }}>
					<img
						src="../Student1.jpg"
						alt="Child playing the traffic game on a laptop"
						style={{
							width: "100%",
							height: "260px", // <-- force equal visual height
							objectFit: "cover", // <-- ensures uniform size
							display: "block",
						}}
					/>

					<figcaption
						style={{
							textAlign: "center",
							marginTop: "8px",
							fontSize: "14px",
							color: "#555",
						}}
					>
						<em>
							Figure 1. Donut scenario during classroom testing
						</em>
					</figcaption>
				</figure>

				{/* FIGURE B */}
				<figure style={{ flex: "1 1 260px", margin: 0 }}>
					<img
						src="../Student2.jpg"
						alt="Two children interacting with the traffic game"
						style={{
							width: "100%",
							height: "260px", // <-- same height as the first
							objectFit: "cover", // <-- crop to fit consistently
							display: "block",
						}}
					/>

					<figcaption
						style={{
							textAlign: "center",
							marginTop: "8px",
							fontSize: "14px",
							color: "#555",
						}}
					>
						<em>Figure 2. Ball scenario played collaboratively</em>
					</figcaption>
				</figure>
			</div>
			
			<br />
			<p>The results showed clear improvement in safe behavior:</p>
			<ul>
				<li>88% of children scored higher in the Donut scenario.</li>
				<li>
					55% of children improved their score in the Ball scenario.
				</li>
			</ul>

			{/* --- Single zoomable figure --- */}
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					margin: "20px 0",
				}}
			>
				<figure style={{ margin: 0, maxWidth: "600px", width: "100%" }}>
					<Zoom>
						<img
							src="../Diagrams.jpg"
							alt="Results from the Donut scenario and Ball scenario"
							style={{
								width: "100%",
								height: "auto",
								display: "block",
								borderRadius: "6px",
							}}
						/>
					</Zoom>

					<figcaption
						style={{
							textAlign: "center",
							marginTop: "8px",
							fontSize: "14px",
							color: "#555",
						}}
					>
						<em>
							The details of scores obtained by the participants
						</em>
					</figcaption>
				</figure>
			</div>

			<p>
				These outcomes suggest that the game effectively teaches
				children how to behave more safely in common traffic situations
				and strengthens their hazard-perception skills.
			</p>
			<br />
		</div>
	);
};

const ProjectBody02 = () => {
	return (
		<div>
			<em style={{ fontSize: "15px" }}>Last updated: 1 Nov, 2025</em>
			<div style={{ margin: "0 auto", textAlign: "center" }}>
				<figure>
					<Zoom>
						<img
							className="image-1"
							alt="Image2Latex Logo"
							src="../MRI_IP_Project.png"
						/>
					</Zoom>
					<figcaption style={{ fontSize: "15px" }}>
						<em>Building...</em>
					</figcaption>
				</figure>
			</div>
			Building....
			{}
		</div>
	);
};

const ProjectBody03 = () => {
	const [activeTab, setActiveTab] = useState("Visibility");

	// ---------- TAB CONTENT SWITCHER ----------
	const renderTabContent = () => {
		switch (activeTab) {
			// ---------------- VISIBILITY ----------------
			case "Visibility":
				return (
					<>
						<div className="heading-1">Visibility</div>
						<br />
						As you may guess from the word visibility, it’s all
						about making things easy to see and understand (Kotturi,
						2025a). When users land on a page, they should instantly
						know what to do next—no guessing games, no hidden
						buttons.
						<br />
						<br />
						Zara’s product page hides all size options until after
						you click “Add,” which feels a bit like buying
						blindfolded. I clicked on a dress and… nothing. No
						sizes, no clues, just mystery. Only after hitting “Add”
						did the sizes appear.
						<br />
						<br />
						{/* Visibility Issues */}
						<div
							style={{
								display: "flex",
								gap: "16px",
								flexWrap: "wrap",
								alignItems: "flex-end", // <-- aligns captions on same baseline
							}}
						>
							{/* FIGURE 1 */}
							<figure style={{ flex: "1 1 300px", margin: 0 }}>
								<Zoom>
									<img
										src="../image_1.png"
										alt="Figure 1"
										width="100%"
									/>
								</Zoom>
								<figcaption
									style={{
										textAlign: "center",
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>Figure 1. Sizes hidden</em>
								</figcaption>
							</figure>

							{/* FIGURE 2 */}
							<figure style={{ flex: "1 1 300px", margin: 0 }}>
								<Zoom>
									<img
										src="../image_2.png"
										alt="Figure 2"
										width="100%"
									/>
								</Zoom>
								<figcaption
									style={{
										textAlign: "center",
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>
										Figure 2. Sizes appear after clicking
									</em>
								</figcaption>
							</figure>
						</div>
						<br />
						So, I decided to fix this mystery.
						<br />
						<br />
						{/* Visibility Redesign */}
						<div
							style={{
								display: "flex",
								gap: "16px",
								flexWrap: "nowrap", // keeps all three in one row
								overflowX: "auto", // scrolls horizontally on small screens
								alignItems: "flex-end",
							}}
						>
							{/* FIGURE 3 */}
							<figure style={{ flex: "1 1 33%", margin: 0 }}>
								<Zoom>
									<img
										src="../image_3.png"
										alt="Figure 3"
										style={{
											width: "100%",
											height: "auto",
										}}
									/>
								</Zoom>
								<figcaption
									style={{
										textAlign: "center",
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>Figure 3. Sizes shown upfront</em>
								</figcaption>
							</figure>

							{/* FIGURE 4 */}
							<figure style={{ flex: "1 1 33%", margin: 0 }}>
								<Zoom>
									<img
										src="../image_4.png"
										alt="Figure 4"
										style={{
											width: "100%",
											height: "auto",
										}}
									/>
								</Zoom>
								<figcaption
									style={{
										textAlign: "center",
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>Figure 4. Size availability visible</em>
								</figcaption>
							</figure>

							{/* FIGURE 5 */}
							<figure style={{ flex: "1 1 33%", margin: 0 }}>
								<Zoom>
									<img
										src="../image_5.png"
										alt="Figure 5"
										style={{
											width: "100%",
											height: "auto",
										}}
									/>
								</Zoom>
								<figcaption
									style={{
										textAlign: "center",
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>Figure 5. Clean size selector</em>
								</figcaption>
							</figure>
						</div>
						<br />
						In the redesign, all sizes show up right away, so users
						instantly know what’s available—no detective work
						required.
						<br />
						<br />
					</>
				);

			// ---------------- CONSTRAINTS ----------------
			case "Constraints":
				return (
					<>
						<div className="heading-1">Constraints</div>
						<br />
						In UX, constraints are the good kind of limits—they
						guide users, prevent errors, and stop things from going
						horribly wrong (Kotturi, 2025a). In short, constraints
						help users do the right thing (and avoid the wrong
						ones).
						<br />
						<br />
						Zara’s login lets you enter the wrong password
						forever—no warning, no lockout, just pure “good luck!”
						energy. That’s a perfect setup for brute-force attacks.
						<br />
						<br />
						{/* Images */}
						<div
							style={{
								display: "flex",
								gap: "16px",
								flexWrap: "wrap",
								alignItems: "flex-end", // <-- aligns captions evenly
							}}
						>
							{/* FIGURE 6 */}
							<figure style={{ flex: "1 1 320px", margin: 0 }}>
								<Zoom>
									<img
										src="../image_6.png"
										alt="Figure 6"
										width="100%"
									/>
								</Zoom>
								<figcaption
									style={{
										textAlign: "center",
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>Figure 6. Constraint Issue</em>
								</figcaption>
							</figure>

							{/* FIGURE 7 */}
							<figure style={{ flex: "1 1 320px", margin: 0 }}>
								<Zoom>
									<img
										src="../image_7.png"
										alt="Figure 7"
										width="100%"
									/>
								</Zoom>
								<figcaption
									style={{
										textAlign: "center",
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>Figure 7. Constraint Redesign</em>
								</figcaption>
							</figure>
						</div>
						<br />
						In the redesign, after a few failed attempts, the
						account locks briefly and the user gets a friendly email
						to confirm activity. A small constraint, but one that
						keeps real users safe and keeps bots from having a
						party. Sometimes good design is simply saying,
						“Nope—you’ve tried enough for today.”
						<br />
					</>
				);

			// ---------------- FEEDBACK ----------------
			case "Feedback":
				return (
					<>
						<div className="heading-1">Feedback</div>
						<br />
						In design, feedback works the same way: it can be
						annoying or extremely helpful—depending on how it’s
						delivered. The key idea is simple: Communicate an
						immediate and appropriate response to the user’s action
						(Kotturi, 2025a).
						<br />
						<br />
						Zara’s “Add” button gives no hover or click feedback,
						making the interaction feel dull and unresponsive.
						<br />
						<br />
						<div
							style={{
								display: "flex",
								gap: "16px",
								flexWrap: "wrap",
								alignItems: "flex-end", // <-- ensures captions align perfectly
							}}
						>
							{/* FIGURE 8 */}
							<figure style={{ flex: "1 1 320px", margin: 0 }}>
								<Zoom>
									<img
										src="../image_8.png"
										alt="Figure 8"
										width="100%"
									/>
								</Zoom>
								<figcaption
									style={{
										textAlign: "center",
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>Figure 8. Feedback Issue</em>
								</figcaption>
							</figure>

							{/* FIGURE 9 */}
							<figure style={{ flex: "1 1 320px", margin: 0 }}>
								<Zoom>
									<img
										src="../image_9.png"
										alt="Figure 9"
										width="100%"
									/>
								</Zoom>
								<figcaption
									style={{
										textAlign: "center",
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>Figure 9. Feedback Redesign</em>
								</figcaption>
							</figure>
						</div>
						<br />
						In the redesign, the button reacts with subtle motion or
						color changes, giving users instant confirmation that
						their action worked. A small touch, but it makes the
						interface feel more engaging and user-friendly.
						<br />
					</>
				);

			// ---------------- CONSISTENCY ----------------
			case "Consistency":
				return (
					<>
						<div className="heading-1">Consistency</div>
						<br />
						In UI design, consistency means using familiar patterns,
						layouts, and elements so that users don’t have to
						relearn how to do things every time. When similar
						actions look and behave the same way, users feel
						confident and in control.
						<br />
						<br />
						On Zara’s site, sections like Zara Origins looked like
						they belonged to a completely different brand—new fonts,
						new spacing, new vibes.
						<br />
						<br />
						<div
							style={{
								display: "flex",
								gap: "16px",
								flexWrap: "wrap",
							}}
						>
							{/* FIGURE 10 */}
							<figure style={{ flex: "1 1 320px", margin: 0 }}>
								<Zoom>
									<img
										src="../image_10.png"
										alt="Figure 10"
										width="100%"
									/>
								</Zoom>
								<figcaption
									style={{
										textAlign: "center",
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>Figure 10. Consistency Issue</em>
								</figcaption>
							</figure>

							{/* FIGURE 11 */}
							<figure style={{ flex: "1 1 320px", margin: 0 }}>
								<Zoom>
									<img
										src="../image_11.png"
										alt="Figure 11"
										width="100%"
									/>
								</Zoom>
								<figcaption
									style={{
										textAlign: "center",
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>Figure 11. Consistency Redesign</em>
								</figcaption>
							</figure>
						</div>
						<br />
						In our redesign, we unified the typography, spacing, and
						layout so every page speaks the same clean, minimalist
						Zara language. A little consistency goes a long way
						toward making users feel at home.
						<br />
					</>
				);

			// ---------------- SIGNIFIER ----------------
			case "Signifier":
				return (
					<>
						<div className="heading-1">Affordance / Signifier</div>
						<br />
						In design terms, they’re the visual cues that show how
						an element should be used. Without them, users end up
						staring at a door wondering if they should push, pull,
						or just walk away.
						<br />
						<br />
						On Zara’s site, the search bar had zero signifiers—no
						border, no placeholder, no magnifying-glass icon—so it
						barely looked usable.
						<br />
						<br />
						{/* Image Pair */}
						<div
							style={{
								display: "flex",
								gap: "16px",
								flexWrap: "wrap",
								alignItems: "flex-end", // <-- ensures captions align perfectly
							}}
						>
							{/* FIGURE 12 */}
							<figure style={{ flex: "1 1 320px", margin: 0 }}>
								<Zoom>
									<img
										src="../image_12.png"
										alt="Figure 12"
										width="100%"
									/>
								</Zoom>
								<figcaption
									style={{
										textAlign: "center",
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>
										Figure 12. Search bar lacking any
										visible signifier
									</em>
								</figcaption>
							</figure>

							{/* FIGURE 13 */}
							<figure style={{ flex: "1 1 320px", margin: 0 }}>
								<Zoom>
									<img
										src="../image_13.png"
										alt="Figure 13"
										width="100%"
									/>
								</Zoom>
								<figcaption
									style={{
										textAlign: "center",
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>
										Figure 13. Redesigned search bar with
										clear signifiers
									</em>
								</figcaption>
							</figure>
						</div>
						<br />
						In the redesign, adding a clear border and a simple icon
						instantly made it obvious. Two tiny changes, and
						suddenly users know exactly where to search.
						<br />
					</>
				);

			// ---------------- MAPPING ----------------
			case "Mapping":
				return (
					<>
						<div className="heading-1">Mapping</div>
						<br />
						Mapping is all about matching what users expect with
						what they actually see—basically the interface saying,
						“Yes, I know what you meant.” When mapping is off, users
						click one thing and get something completely different.
						<br />
						<br />
						On Zara’s site, clicking “Basic T-Shirts” sometimes
						showed coats, long sleeves, or anything but basic tees.
						Total mapping fail.
						<br />
						<br />
						<div
							style={{
								display: "flex",
								gap: "16px",
								flexWrap: "wrap",
								alignItems: "flex-end", // helps caption alignment
							}}
						>
							{/* FIGURE 14 */}
							<figure style={{ flex: "1 1 320px", margin: 0 }}>
								<Zoom>
									<img
										src="../image_14.png"
										alt="Figure 14"
										className="mapping-img" // <-- equal height class
									/>
								</Zoom>
								<figcaption
									style={{
										textAlign: "center",
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>Figure 14. Mapping Issue</em>
								</figcaption>
							</figure>

							{/* FIGURE 15 */}
							<figure style={{ flex: "1 1 320px", margin: 0 }}>
								<Zoom>
									<img
										src="../image_15.png"
										alt="Figure 15"
										className="mapping-img" // <-- equal height class
									/>
								</Zoom>
								<figcaption
									style={{
										textAlign: "center",
										marginTop: "8px",
										fontSize: "14px",
										color: "#555",
									}}
								>
									<em>Figure 15. Mapping Redesign</em>
								</figcaption>
							</figure>
						</div>
						<br />
						In the redesign, the page now opens with a model clearly
						wearing a basic t-shirt, followed by the actual
						products. No more scroll-and-guess. The interface
						finally behaves the way users expect.
						<br />
					</>
				);

			default:
				return null;
		}
	};

	// -----------------------------------------
	// MAIN RETURN
	// -----------------------------------------
	return (
		<div>
			{/* -------- Header -------- */}
			<em style={{ fontSize: "15px" }}>Last updated: 7 Dec, 2025</em>
			<div style={{ margin: "0 auto", textAlign: "center" }}>
				<figure>
					<img
						className="project-logo-header"
						src="../Zara-logo.jpg"
						alt="Zara Logo"
					/>
				</figure>
			</div>
			{/* -------- Problem Statement -------- */}
			<div className="heading-1">Problem Statement</div>
			<br />
			When you arrive at this page, you might ask yourself, "Why did we
			redesign this website? Are we really better than the original
			designers?”
			<br />
			Well—with no offense intended—we have to say yes!
			<br />
			As we explored Zara’s website, we were surprised to find that a
			company worth over $100 billion could have so many design flaws.
			<br />
			So, we decided to redesign it based on six core design principles,
			including:
			<br />
			<ul>
				<li>Visibility</li>
				<li>Constraints</li>
				<li>Feedback</li>
				<li>Consistency</li>
				<li>Affordance/Signifier</li>
				<li>Mapping</li>
			</ul>
			<br />
			{/* -------- Skills Demonstrated -------- */}
			<div className="heading-1">Skills Demonstrated</div>
			<br />
			We analyzed Zara’s website using Figma and a heuristic review,
			identifying key usability issues in visibility, constraints,
			feedback, consistency, signifiers, and mapping. Instead of
			rebuilding the site, we refined its existing structure through
			targeted wireframes, clarifying confusing layouts and improving the
			overall flow. These insights guided a cleaner, more intuitive
			redesign aligned with core interaction-design principles.
			<br />
			<br />
			{/* -------- Table -------- */}
			<div className="heading-1">Team & Project Details</div>
			<br />
			<table
				style={{
					borderCollapse: "collapse",
					width: "100%",
					maxWidth: "800px",
				}}
			>
				<thead>
					<tr>
						<th style={styles.th}>Category</th>
						<th style={styles.th}>Details</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style={styles.td}>Team Members</td>
						<td style={styles.td}>Thi Phuong Chi Vo, Sana Nahvi</td>
					</tr>

					<tr>
						<td style={styles.td}>Guided By</td>
						<td style={styles.td}>
							Dr. Yasmine Koturri &amp; Golnaz Moharrer
						</td>
					</tr>

					<tr>
						<td style={styles.td}>My Role</td>
						<td style={styles.td}>
							We discussed most parts together, but I focused on
							Constraints, Feedback, and Mapping.
						</td>
					</tr>

					<tr>
						<td style={styles.td}>Tools</td>
						<td style={styles.td}>Figma + AI tools</td>
					</tr>

					<tr>
						<td style={styles.td}>Duration</td>
						<td style={styles.td}>Oct 28 – Nov 3, 2025</td>
					</tr>

					<tr>
						<td style={styles.td}>Website Studied</td>
						<td style={styles.td}>
							Zara{" "}
							<a
								href="https://www.zara.com"
								target="_blank"
								rel="noreferrer"
							>
								https://www.zara.com
							</a>
						</td>
					</tr>
				</tbody>
			</table>
			<br />
			<br />
			{/* -------- Tabs and Redesign Content -------- */}
			<div className="heading-1">
				Overview of the Design Process & Redesign Solutions
			</div>
			<br />
			In the following sections, we analyze one design flaw for each
			interaction principle.
			<br />
			<br />
			{/* ---- Horizontal Tabs ---- */}
			<div style={styles.tabsContainer}>
				{[
					"Visibility",
					"Constraints",
					"Feedback",
					"Consistency",
					"Signifier",
					"Mapping",
				].map((tab) => (
					<button
						key={tab}
						onClick={() => setActiveTab(tab)}
						style={{
							...styles.tabButton,
							borderBottom:
								activeTab === tab
									? "2px solid black"
									: "2px solid transparent",
							fontWeight: activeTab === tab ? "bold" : "normal",
						}}
					>
						{tab === "Signifier" ? "Affordance/Signifier" : tab}
					</button>
				))}
			</div>
			<br />
			<div style={styles.contentWrapper}>{renderTabContent()}</div>
			<br />
			<br />
			{/* -------- Outcome -------- */}
			<div className="heading-1">Final Outcome</div>
			<p>
				The redesign we created for Zara’s website didn’t fix every
				issue—there were actually quite a few—but we focused on six
				major ones based on the core design principles discussed
				earlier.
			</p>
			<ul>
				<li>
					Improved <strong>visibility</strong> by showing size options
					immediately.
				</li>
				<li>
					Added login <strong> constraints</strong> to prevent
					repeated failed attempts.
				</li>
				<li>
					Enhanced <strong> feedback</strong> with responsive button
					interactions.
				</li>
				<li>
					Strengthened <strong> consistency</strong> through unified
					typography and layout.
				</li>
				<li>
					Clarified <strong> signifiers</strong> by redesigning the
					search bar.
				</li>
				<li>
					Fixed <strong> mapping</strong> so categories show the
					correct products right away.
				</li>
			</ul>
			<p>
				We’ve included examples of our redesigned screens above, and the
				full interactive version is available on Figma.{" "}
				<a
					href="https://www.figma.com/design/DcxAd4ddiWDa0uMUXCp6np/Chi-Vo---Sana-Nahvi---Zara-Redesign?node-id=71-65&t=vCKa96VL39p2tT9X-1"
					target="_blank"
					rel="noreferrer"
				>
					Link
				</a>
			</p>
			<br />
			{/* -------- Reflection -------- */}
			<div className="heading-1">Reflection & Lessons Learned</div>
			<br />
			We learned how small, principle-driven changes—like clearer
			visibility, better feedback, and stronger mapping—can greatly
			improve usability. The project also sharpened our ability to think
			from the user’s perspective and approach redesigns like real
			designers. Even a major brand like Zara showed us that every
			interface has room to improve.
			<br />
			<br />
			{/* -------- References -------- */}
			<div className="heading-1">References</div>
			<ol>
				<li>Kotturi, Y. (2025). Interaction Design Rules – Part 1.</li>
				<li>Kotturi, Y. (2025). Interaction Design Rules – Part 2.</li>
				<li>OpenAI. ChatGPT LLM (2025).</li>
			</ol>
		</div>
	);
};

// -----------------------------------------
// STYLES
// -----------------------------------------
const styles = {
	th: {
		border: "1px solid #ccc",
		padding: "8px",
		textAlign: "left",
		background: "#f1f1f1",
	},

	td: {
		border: "1px solid #ccc",
		padding: "8px",
	},

	tdLeft: {
		padding: "10px",
		border: "1px solid #ddd",
		width: "120px",
		// fontWeight: "bold",
	},

	tabsContainer: {
		position: "sticky",
		top: 0,
		zIndex: 20,

		display: "flex",
		gap: "28px",
		overflowX: "auto",

		padding: "16px 28px",
		marginBottom: "0px",

		backgroundColor: "#e9e9e9", // darker gray → more salience
		border: "1px solid #d0d0d0",
		borderRadius: "10px",
		boxShadow: "0 2px 6px rgba(0,0,0,0.12)", // stronger shadow
	},

	tabButton: {
		background: "transparent",
		border: "none",
		fontSize: "18px",
		fontWeight: "600",
		color: "#333",

		padding: "10px 2px",
		cursor: "pointer",
		whiteSpace: "nowrap",
	},

	// Add this for the main content section
	contentWrapper: {
		background: "#fafafa",
		border: "1px solid #e0e0e0",
		borderRadius: "10px",
		padding: "32px 40px",
		boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
	},
};

// ---------- TAB CONTENT SWITCHER ----------

const ProjectBody04 = () => {
	const [activeTab, setActiveTab] = useState(
		"Empathize, Define & Initial Prototype"
	);

	// ---------- TAB CONTENT SWITCHER ----------
	const SprintTabs = () => {
		const renderTabContent = () => {
			switch (activeTab) {
				// ---------------- SPRINT 1 ----------------
				case "Empathize, Define & Initial Prototype":
					return (
						<>
							<div className="heading-1">
								<br />
								Sprint 1 — Empathize, Define &amp; Initial
								Prototype
							</div>
							<br />
							<strong>1. Research &amp; Analysis</strong>
							<br />
							• Explored NotebookLM to uncover pain points around
							feedback, visibility, and execution gaps.
							<br />
							• Logged issues individually and created divergent
							paper sketches to propose solutions.
							<br />
							<br />
							<strong>2. Initial Prototype</strong>
							<br />
							• Prioritized fixes based on usability, clarity, and
							feasibility.
							<br />
							• Built the first high-level prototype integrating
							selected ideas from the team.
							<br />
							{/* ---- Figma Link ---- */}
							<div style={{ marginTop: "8px" }}>
								<a
									href="https://www.figma.com/proto/80pk5H9GSzHeC4DBGfbwJZ/HCC-629_?node-id=11058-4137&p=f&t=TZ2vDUWwdEExhBeT-1&scaling=min-zoom&content-scaling=fixed&page-id=11058%3A3144&starting-point-node-id=11058%3A4137"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: "#3366BB",
										textDecoration: "underline",
										fontSize: "15px",
										fontWeight: "500",
									}}
								>
									View our interactive Figma prototype in
									Sprint 1
								</a>
							</div>
							<br />
							{/* ---- GIF Section ---- */}
							<div
								style={{
									textAlign: "center",
									marginTop: "10px",
								}}
							>
								<img
									src="../Sprint1.GIF"
									alt="Sprint 1 Prototype GIF"
									style={{
										width: "100%",
										maxWidth: "750px",
										borderRadius: "14px",
										boxShadow:
											"0 4px 18px rgba(0,0,0,0.12)",
									}}
								/>
								<figcaption
									style={{
										fontSize: "14px",
										marginTop: "6px",
										color: "#555",
										fontStyle: "italic",
									}}
								>
									Sprint 1 prototype demonstrating our first
									pass at improving NotebookLM’s usability.
								</figcaption>
							</div>
						</>
					);

				// ---------------- SPRINT 2 ----------------
				case "Usability Testing & Refinement":
					return (
						<>
							<div className="heading-1">
								<br />
								Sprint 2 — Usability Testing &amp; Refinement
							</div>
							<br />
							<strong>3. Usability Testing</strong>
							<br />
							• Ran 1:1 comparative tests (original site vs.
							prototype).
							<br />
							• Collected time on task, think-aloud comments,
							behavior observations, and “I Like / I Wish” notes.
							<br />
							• Users struggled with unclear audio controls, long
							text sections, missing Back/Previous buttons, and
							confusion during the upload sequence.
							<br />
							<br />
							<strong>4. Final Refinements</strong>
							<br />
							Based on evidence, we improved:
							<br />• <strong>Audio controls:</strong> Added
							pause, restart, and progress indicators.
							<br />• <strong>Navigation:</strong> Added Back/Next
							buttons and clarified button hierarchy.
							<br />• <strong>Upload:</strong> Added a “Choose
							File” button plus an intermediate confirmation step.
							<br />• <strong>Content layout:</strong> Shorter
							labels, more spacing, better hierarchy.
							<br />• <strong>Visibility:</strong> Restored the
							Studio panel and made feature descriptions clearer.
							<br />
							{/* ---- Figma Link ---- */}
							<div style={{ marginTop: "8px" }}>
								<a
									href="https://www.figma.com/proto/80pk5H9GSzHeC4DBGfbwJZ/HCC-629_Team-Modifiers---Process-of-Interaction-Design?node-id=11302-11132&p=f&t=Ioeqi6AMsD6etqet-1&scaling=contain&content-scaling=fixed&page-id=11302%3A9576&starting-point-node-id=11302%3A11132"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: "#3366BB",
										textDecoration: "underline",
										fontSize: "15px",
										fontWeight: "500",
									}}
								>
									View our interactive Figma prototype in
									Sprint 2
								</a>
							</div>
							<br />
							{/* ---- GIF Section ---- */}
							<div
								style={{
									textAlign: "center",
									marginTop: "10px",
								}}
							>
								<img
									src="../Sprint2.GIF"
									alt="Sprint 2 Prototype GIF"
									style={{
										width: "100%",
										maxWidth: "750px",
										borderRadius: "14px",
										boxShadow:
											"0 4px 18px rgba(0,0,0,0.12)",
									}}
								/>
								<figcaption
									style={{
										fontSize: "14px",
										marginTop: "6px",
										color: "#555",
										fontStyle: "italic",
									}}
								>
									Updated Sprint 2 prototype demonstrating
									improvements based on user testing and
									design principles.
								</figcaption>
							</div>
						</>
					);

				default:
					return null;
			}
		};
		return (
			<>
				{/* ---------- TAB HEADERS ---------- */}
				<div
					style={{
						display: "flex",
						justifyContent: "Left",
						gap: "24px",
						borderBottom: "1px solid #ddd",
						paddingBottom: "8px",
						marginBottom: "24px",
					}}
				>
					<button
						onClick={() =>
							setActiveTab(
								"Empathize, Define & Initial Prototype"
							)
						}
						style={{
							border: "none",
							background: "none",
							cursor: "pointer",
							fontSize: "16px",
							fontWeight:
								activeTab ===
								"Empathize, Define & Initial Prototype"
									? "700"
									: "500",
							padding: "4px 0",
							margin: "0",
							paddingBottom: "6px",
							borderBottom:
								activeTab ===
								"Empathize, Define & Initial Prototype"
									? "3px solid #000"
									: "3px solid transparent",
						}}
					>
						Empathize, Define &amp; Initial Prototype
					</button>

					<button
						onClick={() =>
							setActiveTab("Usability Testing & Refinement")
						}
						style={{
							border: "none",
							background: "none",
							cursor: "pointer",
							fontSize: "16px",
							fontWeight:
								activeTab === "Usability Testing & Refinement"
									? "700"
									: "500",
							padding: "4px 0",
							margin: "0",
							paddingBottom: "6px",
							borderBottom:
								activeTab === "Usability Testing & Refinement"
									? "3px solid #000"
									: "3px solid transparent",
						}}
					>
						Usability Testing &amp; Refinement
					</button>
				</div>

				{/* ---------- TAB CONTENT ---------- */}
				{renderTabContent()}
			</>
		);
	};

	return (
		<div>
			<em style={{ fontSize: "15px" }}>Last updated: 7 Dec, 2025</em>
			<div style={{ margin: "30pt auto", textAlign: "center" }}>
				<figure>
					<img
						alt="NotebookLM Logo"
						src="../NotebookLM_logo.png"
						className="project-logo-header"
					/>
				</figure>
			</div>
			<br />
			<br />
			<div className="heading-1">Problem Statement</div>
			<br />
			NotebookLM is a powerful AI study tool, but new users often struggle
			with unclear feedback, low visibility of features, and confusing
			task flows. Our goal was to redesign core interactions—
			<strong>uploading files</strong>,{" "}
			<strong>navigating the interface</strong>, and the{" "}
			<strong>audio overview</strong>—to reduce cognitive load and improve
			learnability.
			<br />
			<br />
			We focused on three core Human-Centered Computing concepts:{" "}
			<strong>Feedback</strong>, <strong>Visibility</strong>, and the{" "}
			<strong>Gulf of Execution</strong>.
			<br />
			<br />
			<strong>Key issues identified:</strong>
			<br />• <strong>Feedback:</strong> No progress bars or confirmation
			messages for uploads or Studio tools.
			<br />• <strong>Visibility:</strong> Low-contrast interface, small
			fonts, and look-alike buttons made key actions hard to find.
			<br />• <strong>Gulf of Execution:</strong> First-time users lacked
			clear guidance, making actions unpredictable—especially with
			automatically generated content.
			<br />
			<br />
			{/* ------- VIDEO SECTION ------- */}
			<div style={{ textAlign: "center", marginTop: "20px" }}>
				<video
					src="../PresentationVideo.mp4" // <-- replace with your actual path
					controls
					style={{
						width: "100%",
						maxWidth: "750px",
						borderRadius: "16px",
						boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
					}}
				/>

				<figcaption
					style={{
						fontSize: "14px",
						marginTop: "8px",
						color: "#555",
					}}
				>
					<em>
						Demo presentation summarizing Sprints 1 and 2 and how we
						redesigned NotebookLM
					</em>
				</figcaption>
			</div>
			<br />
			<br />
			<br />
			<div className="heading-1">Skills Demonstrated</div>
			<ul>
				<li>
					Applying Human–Computer Interaction principles from{" "}
					<strong>Norman, Nielsen, and Shneiderman</strong>
				</li>
				<li>
					<strong>Usability analysis</strong> and think-aloud testing
					with real users
				</li>
				<li>
					<strong>Paper sketching</strong> and rapid ideation of
					alternative flows
				</li>
				<li>
					<strong>Figma prototyping</strong> (both low- and
					high-fidelity)
				</li>
				<li>
					Information architecture and <strong>layout design</strong>
				</li>
				<li>
					Combining <strong>quantitative</strong> (time on task) and{" "}
					<strong>qualitative</strong> (observations, “I Like / I
					Wish”) insights
				</li>
				<li>
					<strong>Iterative refinement</strong> based on evidence from
					real user tests
				</li>
			</ul>
			<br />
			<br />
			<div className="heading-1">Team & Project Details</div>
			<br />
			<table
				style={{
					borderCollapse: "collapse",
					width: "100%",
					maxWidth: "800px",
				}}
			>
				<thead>
					<tr>
						<th style={styles.th}>Category</th>
						<th style={styles.th}>Details</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td style={styles.tdLeft}>Course</td>
						<td style={styles.td}>
							HCC 629 — Human-Centered Computing
						</td>
					</tr>

					<tr>
						<td style={styles.td}>Team Members</td>
						<td style={styles.td}>
							Shourya Kashyap Rami (Lead), Sana Nahvi, Nazeemuddin
							Sufi Mohammad, Mounika Dasari
						</td>
					</tr>

					<tr>
						<td style={styles.td}>Guided By</td>
						<td style={styles.td}>
							Dr. Yasmine Kotturi &amp; Golnaz Moharrer
						</td>
					</tr>

					<tr>
						<td style={styles.td}>My Role</td>
						<td style={styles.td}>
							I contributed to concept development, sketching,
							Figma prototyping, writing the usability test
							scenario, and refining the final design based on
							test results.
						</td>
					</tr>

					<tr>
						<td style={styles.td}>Tools</td>
						<td style={styles.td}>
							Figma, Google Meet, Google Docs, WhatsApp
						</td>
					</tr>

					<tr>
						<td style={styles.td}>Product Studied</td>
						<td style={styles.td}>
							<a
								href="https://notebooklm.google/"
								target="_blank"
								rel="noreferrer"
							>
								NotebookLM
							</a>
						</td>
					</tr>

					<tr>
						<td style={styles.td}>Duration</td>
						<td style={styles.td}>
							Sprint 1 (Nov 17–24, 2025) — Sprint 2 (Nov 24–Dec 1,
							2025)
						</td>
					</tr>
				</tbody>
			</table>
			<br />
			<br />
			<div className="heading-1">Overview of the Design Process</div>
			<br />
			<div style={styles.contentWrapper}>{SprintTabs()}</div>
			<br />
			<br />
			<div className="heading-1">Final Impact</div>
			<br />
			The redesigned prototype delivered a faster, clearer experience for
			new users.
			<br />
			Users’ task completion time dropped from several minutes to roughly{" "}
			<strong>20–30 seconds</strong>.
			<br />
			<br />
			<strong>Key improvements:</strong>
			<br />• <strong>Feedback:</strong> Clearer audio readiness
			notifications and visible progress indicators.
			<br />• <strong>Navigation:</strong> Added Home and Back buttons to
			reduce uncertainty and support flexible movement.
			<br />• <strong>Visibility &amp; Guidance:</strong> Stronger visual
			hierarchy, descriptive tool labels, and onboarding steps for
			first-time users.
			<br />
			<br />
			<br />
			<br />
			<div className="heading-1">Reflection</div>
			<br />
			Working through two full design sprints revealed how small usability
			gaps can significantly affect user confidence. Testing showed the
			importance of clearer labels, better spacing, and predictable
			navigation—even small elements like the
			<strong> “Previous” </strong>button had a major impact.
			<br />
			<br />
			This project strengthened my approach to usability testing and
			evidence-based iteration. It also showed how thoughtful hierarchy,
			reduced text density, and visible system status can dramatically
			improve learnability and user satisfaction.
			<br />
			<br />
			<br />
		</div>
	);
};

const ProjectBodies = [
	ProjectBody04,
	ProjectBody03,
	ProjectBody02,
	ProjectBody01,
];
export default ProjectBodies;
