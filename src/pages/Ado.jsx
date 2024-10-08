import React from "react";

export default function Ado({ rows, Link }) {
  return (
    <div>
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
              <Link to="/artist">Artist</Link>
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
            src="https://raw.githubusercontent.com/Adornadowilliam2/images/4f4962cff0982f3c179a2e3d1dba02e3ce131a5e/images.jpeg"
            alt="Album Art"
          />
        </div>
        <div className="track-list">
          {rows[0].map((item) => (
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
