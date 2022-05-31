import React from "react";
import "./Info.css";
function Info(props) {
  return (
    <>
      <main>
        <div class="hero">
          <h1>{props.heading}</h1>
          <p>{props.info}</p>
          <img src={props.img} />
          <div class="bar"></div>
        </div>
      </main>
    </>
  );
}

export default Info;
