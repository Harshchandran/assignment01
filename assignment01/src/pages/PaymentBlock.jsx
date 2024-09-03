import React from "react";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

export const PaymentBlock = () => {
  return (
    <>
      <div>PaymentBlock</div>
      <div>
        <h3>Payment Mode</h3>
        <div>
          <div>
            <span>
              <DoneRoundedIcon />
            </span>
            Deposit to Account
          </div>
          <div>
            <span>
              <DoneRoundedIcon />
            </span>
            Net Banking
          </div>
          <div>
            <span>
              <DoneRoundedIcon />
            </span>
            Credit Card/Debit Card
          </div>
          <div>
            <span>
              <DoneRoundedIcon />
            </span>
            Wallets (PayTM/PhonePe/Amazon etc.)
          </div>
          <div>
            <span>
              <DoneRoundedIcon />
            </span>
            UPI
          </div>
        </div>
      </div>
    </>
  );
};
