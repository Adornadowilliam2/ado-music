import React from "react";

export default function Album({ Link }) {
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
          {" "}
          <Link to="/ado-music">
            <img
              src="https://github.com/Adornadowilliam2/images/blob/main/ado.jpeg?raw=true"
              alt="Ado music"
            />
            Ado Music
          </Link>
        </div>

        <div>
          <Link to="/radwimps">
            <img
              src="https://github.com/Adornadowilliam2/images/blob/main/radwimps.jpeg?raw=true"
              alt="radwimps image"
            />
            RadWimps
          </Link>
        </div>

        <div>
          <Link to="/aizen">
            <img
              src="https://github.com/Adornadowilliam2/images/blob/main/aizen.jpg?raw=true"
              alt="Aizen images"
            />
            Aizen
          </Link>
        </div>
      </div>
    </>
  );
}
