import React from "react";
import { ShopDetails } from "./ShopDetails";
import { PaymentBlock } from "./PaymentBlock";
import { QueryBlock } from "./QueryBlock";
import { Footer } from "./Footer";

export const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <ShopDetails />
      <PaymentBlock />
      <QueryBlock />
      <Footer />
    </>
  );
};
