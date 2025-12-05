import React from "react";
import "./Footer.css";
import { assets } from "../../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Company logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            doloremque necessitatibus dolores culpa delectus perspiciatis illo?
            Nam, molestias. Quis soluta sequi aliquam amet quam pariatur nisi,
            tempore saepe, nemo nostrum magnam commodi blanditiis, officia dolores.
            Omnis officiis voluptas, nihil adipisci reprehenderit, iste maxime, ut
            magnam libero maiores nemo sequi sunt.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-7761966639</li>
            <li>goluashu3@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 © tomato.com - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
