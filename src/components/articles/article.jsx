import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Article = (props) => {
    const {date, title, description, link, image} = props;

    return (
        <React.Fragment>
            <div className="article">
                <div className="article-left-side">
                    <div className="article-date">{date}</div>
                    <div className="article-image-container">
                        <div className="article-image-wrapper">
                            <img
                                src={image}
                                alt={image}
                                className="article-image"
                            />
                        </div>
                    </div>
                </div>

                <Link to={link} target="_blank">
                    <div className="article-right-side">

                        <div className="article-title">{title}</div>
                        <div className="article-description">{description}</div>
                        <div className="article-link">
                            Article Link{" "}
                            <FontAwesomeIcon
                                style={{fontSize: "10px"}}
                                icon={faChevronRight}
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default Article;
