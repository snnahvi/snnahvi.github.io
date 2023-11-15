import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";

const Articles = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "publications");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Publications | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description}/>
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="articles"/>
                <div className="content-wrapper">
                    <div className="articles-logo-container">
                        {/*<div className="articles-logo">*/}
                        {/*	<Logo width={46} />*/}
                        {/*</div>*/}
                    </div>

                    <div className="articles-main-container">

                        <div className="subtitle articles-subtitle">
                            <a
                                href="https://scholar.google.com/citations?user=aozCgSkAAAAJ&hl=en"
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
        </React.Fragment>
    );
};

export default Articles;
