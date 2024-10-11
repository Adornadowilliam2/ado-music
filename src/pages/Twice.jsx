import React from "react";

export default function Twice({ Link, rows }) {
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
        <h1>Twice Music Album</h1>
        <div className="album-art">
          <img
            src="https://th.bing.com/th/id/OIP.0loUDNUHIbbRE8vLiLkgGwHaHa?w=214&h=214&c=7&r=0&o=5&pid=1.7"
            alt="Album Art"
          />
        </div>
        <div className="track-list">
          {rows[4].map((item, index) => (
            <div className="track" key={item.id}>
              <div className="track-card">
                <img
                  src={item.image}
                  alt={item.name + " soundtrack bg"}
                  style={{
                    width: "300px",
                    height: "200px",
                  }}
                />
                <span>
                  Track {index + 1}: {item.name}
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
