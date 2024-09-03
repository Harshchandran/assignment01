import React from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export const ShopDetails = () => {
  return (
    <>
      <section>
        <div>
          <div>
            <h3>SHREE HEMKUNT TYRES AND SERVICES</h3>
            <p>
              <span>
                <VerifiedUserIcon />
              </span>
              Verified
            </p>
          </div>
          <div>
            <span>
              <FmdGoodOutlinedIcon />
            </span>
            4.9 2278 Reviews PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD,
            AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
          </div>
          <div>
            <span>
              <AccessTimeOutlinedIcon />
            </span>
            Open - Monday to Sunday - 10:00AM to 8:00PM
          </div>
          <button>Get Directions</button>
        </div>
        <div></div>
      </section>
    </>
  );
};
