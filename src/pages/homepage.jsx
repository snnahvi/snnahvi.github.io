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
            
                 
                <div className="page-footer">
                    <Footer/>
                </div>
            </React.Fragment>
        );
    
};

export default Homepage;