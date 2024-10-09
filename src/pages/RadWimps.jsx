import React from "react";

export default function RadWimps({ Link, image }) {
  return (
    <div style={{ background: "rgb(154, 154, 20)" }}>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <Link to="/album">Albums</Link>
            </li>
            <li>
              <a href="#">Artists</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <input type="text" placeholder="Search..." />
      </header>
      <main>
        <h1>Ado Music Album</h1>
        <div className="album-art">
          <img
            src="https://github.com/Adornadowilliam2/images/blob/main/cartoon_radwimps.jpeg?raw=true"
            alt="Album Art"
          />
        </div>
        <div className="track-list">
          {image.slice(1).map((item) => (
            <div className="track" key={item.id}>
              <div className="track-card">
                <img src={item.image} alt={item.name + " soundtrack bg"} />
                <span>
                  Track {item.id}: {item.name}
                </span>
                <audio controls>
                  <source src={item.track} type="audio/mpeg" />
                </audio>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
