import React from "react";

export default function Aizen({ Link, rows }) {
  const lyrics = [
    "I can tell that you've never been true to me",
    "I can smell that you're acting so fearfully",
    "I can hear what you're hoping I want to hear",
    "I can feel the alarm bells are ringing in me",
    "I can touch but I know you don't feel a thing",
    "I can pray but I know you commit a sin",
    "I can sense now it's all become clear to see",
    "You're no good, and you mean no good treacherously",
  ];

  return (
    <div
      style={{
        minWidth: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Aizen Trachery Song</h1>
      <div className="card">
        <img
          src={rows[1][0].image}
          alt="Aizen Sosuke"
          style={{
            width: "200px",
            maxWidth: "100%",
            minWidth: "100px",
            margin: "10px auto",
            display: "block",
          }}
        />
        <audio
          src={rows[1][0].track}
          controls
          autoPlay
          loop
          style={{ margin: "0", scale: "0.9" }}
        />
      </div>
      <div style={{ textAlign: "left", margin: "10px" }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index + 1}>
            {lyrics.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            <br />
          </div>
        ))}
      </div>
      <Link to="/album">Back to Album</Link>
    </div>
  );
}
