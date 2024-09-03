import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "../../Wheels/TP-logo.webp";

export const Footer = () => {
  return (
    <>
      <div>Footer</div>
      <footer>
        <div>
          <div>
            <div>
              <img src={Logo} alt="" />
            </div>
            <FacebookRoundedIcon />
            <InstagramIcon />
          </div>
          <div>
            <ul>
              <li>Who We Are </li>
              <li>Are you a Tyre Dealer? </li>
              <li> Privacy Policy</li>
              <li>Terms of use </li>
              <li>Contact Us </li>
              <li>Career </li>
              <li>Shipping & Return Policy</li>
            </ul>
          </div>
        </div>

        <div>
          ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved
        </div>
      </footer>
    </>
  );
};
