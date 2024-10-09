import React from "react";

export default function Album({ Link }) {
  return (
    <>
      <h1>Album</h1>

      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1 0 30%", margin: "10px" }}>
          <Link to="/ado-music">
            <img
              src="https://github.com/Adornadowilliam2/images/blob/main/ado.jpeg?raw=true"
              alt="Ado music"
            />
            Ado Music
          </Link>
        </div>

        <div style={{ flex: "1 0 30%", margin: "10px" }}>
          <Link to="/radwimps">
            <img
              src="https://github.com/Adornadowilliam2/images/blob/main/radwimps.jpeg?raw=true"
              alt="radwimps image"
            />
            RadWimps
          </Link>
        </div>

        <div style={{ flex: "1 0 30%", margin: "10px" }}>
          <Link to="/aizen">
            <img
              src="https://github.com/Adornadowilliam2/images/blob/main/aizen.jpg?raw=true"
              alt="Aizen images"
            />
            Aizen
          </Link>
        </div>

        {/* Repeat for additional items to fill the 3x3 layout */}
      </div>
    </>
  );
}
