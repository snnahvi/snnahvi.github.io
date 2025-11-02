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
import AllProjects from "../components/projects/allProjects";
import myArticles from "../data/articles";
import Article from "../components/articles/article";

 
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
                    <NavBar active=""/>
                    <div className="content-wrapper">
                        <div className="homepage-logo-container">
                            {/*<div style={logoStyle}>*/}
                            {/*	<Logo width={logoSize} link={false} />*/}
                            {/*</div>*/}
                        </div>

                        <div className="homepage-container" id="about">
                            <div className="homepage-first-area">
                                <div className="homepage-first-area-left-side">
                                    <div className="title homepage-title" style={{fontSize: "35px"}}>
                                        Hi!
                                    </div>

                                    <div className="subtitle homepage-subtitle">
                                        This is Azadeh (Sana) Nahvi! You can call me <b>Sana</b>. 
                                        I received my <b>BSc</b> in <b>Computer Engineering</b>, 
                                        and I’m currently an <b>MSc</b> student in <b>Human-Centered Computing</b> (HCC) at <b>UMBC</b>.
                    
                                        <br/><br/>
                                        I’m very interested in learning and improving my skills in computer science. 
                                        Since I’m at the beginning of my journey, I’ve worked on projects in various areas of computer science,
                                        but my main goal has always been to find ways to <b>improve people’s everyday lives</b>  through technology.
                                    </div>
                                </div>

                                <div className="homepage-first-area-right-side">
                                    <div className="homepage-image-container">
                                        <div className="homepage-image-wrapper">
                                            <img
                                                src="Me.jpg"
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
                                            href="https://scholar.google.com/citations?user=deveYvoAAAAJ&hl=en&oi=ao"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FontAwesomeIcon
                                                icon={faGraduationCap}
                                                className="homepage-social-icon"
                                            />
                                        </a>
                                        <a
                                            href="Resume_AzadehNahvi.pdf"
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

                            <div className="homepage-first-area" style={{paddingTop: "30px"}}>
                                <div className="homepage-first-area-left-side">
                                    <div className="title homepage-title">
                                        Research Interests
                                    </div>

                                    <div className="subtitle homepage-subtitle">
                                        My research interests lie in the span of these areas:
                                        <ul style={{width: "100%"}}>
                                            <li>HCC, HCI, UX, and Data Analysis</li>
                                            <li>Adaptive and Assistive Technologies</li>
                                            <li>IoT and Smart Systems</li>
                                            <li>Machine Learning</li>
                                            <li>Health Technology Innovation</li>
                                            <li>Information Technology and Automation</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="homepage-first-area-right-side">
                                    <div className="homepage-works">
                                        <Works/>
                                    </div>
                                </div>
                            </div>




                            <div className="projects-container" id="projects" style={{paddingTop: "50px"}}>
                                <div className="title homepage-title-others">
                                    Projects
                                </div>
                                <div className="projects-list">
                                    <AllProjects />
                                </div>
                            </div>



                            <div className="articles-main-container" id="publications"  style={{paddingTop: "50px"}}>
                                <div className="title homepage-title-others">
                                    Publications
                                </div>
                                <div className="subtitle articles-subtitle">
                                    <a
                                        href="https://scholar.google.com/citations?user=deveYvoAAAAJ&hl=en"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faGraduationCap}
                                            className="homepage-social-icon"
                                        />
                                        Google Scholar
                                    </a>
                                </div>

                                <div className="articles-container">
                                    <div className="articles-wrapper">
                                        {myArticles.map((article, index) => (
                                            <div
                                                className="articles-article"
                                                key={(index + 1).toString()}
                                            >
                                                <Article
                                                    key={(index + 1).toString()}
                                                    date={article().date}
                                                    title={article().title}
                                                    description={article().description}
                                                    link={article().link}
                                                    image={article().image}
                                                />
                                            </div>
                                        ))}
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
