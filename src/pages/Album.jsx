import React from "react";
import { Link } from "react-router-dom";

export default function Album() {
  return (
    <>
      <h1>Album</h1>

      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src="https://github.com/Adornadowilliam2/images/blob/main/ado.jpeg?raw=true"
            alt="Ado music"
          />
          <Link to="/ado-music">Ado Music</Link>
        </div>

        <div>
          <img
            src="https://github.com/Adornadowilliam2/images/blob/main/radwimps.jpeg?raw=true"
            alt="radwimps image"
          />
          <Link to="/radwimps">RadWimps</Link>
        </div>

        <div>
          <img
            src="https://github.com/Adornadowilliam2/images/blob/main/aizen.jpg?raw=true"
            alt="Aizen images"
          />
          <Link to="/aizen">Aizen</Link>
        </div>
      </div>
    </>
  );
}
