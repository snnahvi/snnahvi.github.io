import React from "react";

import "./styles/footer.css";
import user from "../../data/user";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="footer-links">
                    <ul className="footer-nav-link-list">
                        <li className="footer-nav-link-item">
                            <div className="subtitle-footer">About</div>
                            Mohammad Reza Heydari
                            <br/>
                            Electrical Engineer
                            <br/>
                            Sharif University of Technology
                        </li>
                        <li className="footer-nav-link-item">
                            <div className="subtitle-footer">Contact</div>
                            {user.main.email}
                        </li>

                    </ul>
                </div>

                <div className="footer-credits">
                    <div className="footer-credits-text">
                        © 2023 Mohammad Reza Heydari
                        <br/>
                        Designed and implemented by me
                        <br/>
                        using <a href="https://github.com/truethari/reactfolio" target="_blank">this wonderful template</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;
