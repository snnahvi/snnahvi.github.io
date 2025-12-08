import "./projectBodies.css";
import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProjectBody01 = () => {
	return (
		<div>
			<em style={{ fontSize: "15px" }}>Last updated: 1 Nov, 2025</em>
			<div style={{ margin: "0 auto", textAlign: "center" }}>
				<figure>
					<Zoom>
						<img
							alt="SpartanX Logo"
							src="../project_Gamification.png"
							width="200"
						/>
					</Zoom>
					<figcaption style={{ fontSize: "15px" }}>
						<em>Building... </em>
					</figcaption>
				</figure>
			</div>
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

const ProjectBody04 = () => {
	const [activeTab, setActiveTab] = useState("Sprint1");

	// ---------- TAB CONTENT SWITCHER ----------

	const SprintTabs = () => {
		const renderTabContent = () => {
			switch (activeTab) {
				// ---------------- SPRINT 1 ----------------
				case "Sprint1":
					return (
						<>
							<div className="heading-1">
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
							<br />
						</>
					);

				// ---------------- SPRINT 2 ----------------
				case "Sprint2":
					return (
						<>
							<div className="heading-1">
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
							<br />
						</>
					);

				default:
					return null;
			}
		};

		return (
			<div>
				{/* Horizontal Tabs */}
				<div
					style={{
						display: "flex",
						gap: "8px",
						marginBottom: "16px",
						borderBottom: "1px solid #ddd",
					}}
				>
					<button
						onClick={() => setActiveTab("Sprint1")}
						style={{
							border: "none",
							background: "none",
							padding: "8px 16px",
							borderBottom:
								activeTab === "Sprint1"
									? "3px solid #000"
									: "3px solid transparent",
							fontWeight: activeTab === "Sprint1" ? "600" : "400",
							cursor: "pointer",
						}}
					>
						Sprint 1
					</button>

					<button
						onClick={() => setActiveTab("Sprint2")}
						style={{
							border: "none",
							background: "none",
							padding: "8px 16px",
							borderBottom:
								activeTab === "Sprint2"
									? "3px solid #000"
									: "3px solid transparent",
							fontWeight: activeTab === "Sprint2" ? "600" : "400",
							cursor: "pointer",
						}}
					>
						Sprint 2
					</button>
				</div>

				{/* Tab Content */}
				{renderTabContent()}
			</div>
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
