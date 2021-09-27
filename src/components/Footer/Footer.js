import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <p>&#169; Copyright 2021 by Alpha</p>
            <div className="social-id">
                <a href="https://www.facebook.com/iamjahirulislam/" target="_blank"><i className="fab fa-facebook-square"></i></a>
                <a href="https://www.instagram.com/iamjahirulislam/" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/jahirul-islam-75b816190/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://twitter.com/iamjohirul" target="_blank"><i className="fab fa-twitter-square"></i></a> <br /> <br />
            </div>
        </div>
    );
};

export default Footer;