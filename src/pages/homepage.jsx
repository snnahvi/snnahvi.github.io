import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

import {faGraduationCap, faEnvelope, faFilePdf} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "home");

    return (
        <React.Fragment>
            <Helmet>
                <title>{INFO.main.title}</title>
                <meta name="description" content={currentSEO.description}/>
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="home"/>
                <div className="content-wrapper">
                    <div className="homepage-logo-container">
                        {/*<div style={logoStyle}>*/}
                        {/*	<Logo width={logoSize} link={false} />*/}
                        {/*</div>*/}
                    </div>

                    <div className="homepage-container">
                        <div className="homepage-first-area">
                            <div className="homepage-first-area-left-side">
                                <div className="title homepage-title" style={{fontSize: "35px"}}>
                                    Hi!
                                </div>

                                <div className="subtitle homepage-subtitle">
                                    I'm Mohammad Reza Heydari.
                                    I received my MSc and BSc degrees in Electrical Engineering from Sharif University.
                                    My major field is <b>Control Systems</b>.
                                    <br/><br/>
                                    Our brain is a complex system capable of doing many tasks compared to a computer.
                                    I have delved into the <b>neuroscience</b> field to unravel its complexities.
                                    My goal is to leverage this understanding to contribute to the development of
                                    innovative <b>tools and robots</b> capable of seamless interaction with our most
                                    intricate organ. By merging knowledge of neuroscience with <b>system
                                    analysis</b> and <b>data science</b> tools, I aim to bridge the gap between the mind
                                    and machines.
                                </div>
                            </div>

                            <div className="homepage-first-area-right-side">
                                <div className="homepage-image-container">
                                    <div className="homepage-image-wrapper">
                                        <img
                                            src="homepage.jpg"
                                            alt="about"
                                            className="homepage-image"
                                        />
                                    </div>
                                </div>

                                <div className="homepage-socials">
                                    {/*<a*/}
                                    {/*    href={INFO.socials.twitter}*/}
                                    {/*    target="_blank"*/}
                                    {/*    rel="noreferrer"*/}
                                    {/*>*/}
                                    {/*    <FontAwesomeIcon*/}
                                    {/*        icon={faTwitter}*/}
                                    {/*        className="homepage-social-icon"*/}
                                    {/*    />*/}
                                    {/*</a>*/}
                                    {/*<a*/}
                                    {/*    href={INFO.socials.github}*/}
                                    {/*    target="_blank"*/}
                                    {/*    rel="noreferrer"*/}
                                    {/*>*/}
                                    {/*    <FontAwesomeIcon*/}
                                    {/*        icon={faGithub}*/}
                                    {/*        className="homepage-social-icon"*/}
                                    {/*    />*/}
                                    {/*</a>*/}
                                    {/*<a*/}
                                    {/*    href={INFO.socials.instagram}*/}
                                    {/*    target="_blank"*/}
                                    {/*    rel="noreferrer"*/}
                                    {/*>*/}
                                    {/*    <FontAwesomeIcon*/}
                                    {/*        icon={faInstagram}*/}
                                    {/*        className="homepage-social-icon"*/}
                                    {/*    />*/}
                                    {/*</a>*/}
                                    <a
                                        href="https://scholar.google.com/citations?user=aozCgSkAAAAJ&hl=en"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faGraduationCap}
                                            className="homepage-social-icon"
                                        />
                                    </a>
                                    <a
                                        href="CV_M_Reza_Heydari.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faFilePdf}
                                            className="homepage-social-icon"
                                        />
                                    </a>
                                    <a
                                        href={`mailto:${INFO.main.email}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="homepage-social-icon"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div style={{width: "100%", height: "10px"}}/>

                        <div className="homepage-first-area">
                            <div className="homepage-first-area-left-side">
                                <div className="title homepage-title">
                                    Research Interests
                                </div>

                                <div className="subtitle homepage-subtitle">
                                    My research interests lie in the span of these areas:
                                    <ul style={{width: "100%"}}>
                                        <li>Neuroscience (learning, vision, sensorimotor)</li>
                                        <li>Machine Learning (reinforcement learning, time-series, vision)</li>
                                        <li>Brain Machine Interface</li>
                                        <li>Signal Processing and Code Implementation</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="homepage-first-area-right-side">
                                <div className="homepage-works">
                                    <Works/>
                                </div>
                            </div>
                        </div>


                        <div className="page-footer">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Homepage;
