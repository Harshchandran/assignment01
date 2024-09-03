import React from "react";
import QueryPic from "../../Wheels/haveQuestion-bg.webp";

export const QueryBlock = () => {
  return (
    <>
      <div>QueryBlock</div>
      <div>
        <div>
          <h2> Have a question about Tyres?</h2>
          <p>Get an answer in 24 hours from our experts.</p>

          <input type="text" placeholder="Ask or search your question" />
        </div>
        <div>
          <img src={QueryPic} alt="Query" />
        </div>
      </div>
    </>
  );
};
