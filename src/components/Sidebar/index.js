import React from 'react';
//import { ReactDOM } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/Group 11logo.png';
import LogoSubtitle from '../../assets/images/Saabitra.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faBolt, faGear, faLightbulb, faEye, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <div className="logo-img">
                <img src= {LogoS} alt="logo" />
            </div>
            <img className="sub-logo" src={LogoSubtitle} alt="Saabitra" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
                <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="work-link" to="/work">
                <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            
        </nav>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel="norefferer" 
                href="https://www.linkedin.com/in/saabitra-bera-47124b154/">
                    <FontAwesomeIcon icon = {faLinkedin} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a 
                target="_blank" 
                rel="norefferer" 
                href="https://github.com/Saabitra">
                    <FontAwesomeIcon icon = {faGithub} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a 
                target="_blank" 
                rel="norefferer" 
                href="https://twitter.com/SaabitraB">
                    <FontAwesomeIcon icon = {faTwitter} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a 
                target="_blank" 
                rel="norefferer" 
                href="https://www.instagram.com/_saabitra_bera_/">
                    <FontAwesomeIcon icon = {faInstagram} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
);

export default Sidebar