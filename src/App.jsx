import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { rows } from "./index.js";

function App() {
  return (
    <main>
      <nav>
        <h1>Ado Music</h1>
        <ul>
          <li>Home</li>
          <li>Create</li>
          <li>Library</li>
          <li>Explore</li>
          <li>Search</li>
        </ul>
      </nav>
      <header>
        <h2>Make a song about anything</h2>
        <div className="search-container">
          <input type="text" placeholder="Search for a song..." />
          <button>Search Song</button>
        </div>
      </header>
      <section>
        {rows.flat().map((item) => (
          <div key={item.musicId} className="music-card">
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} className="card-image" />
            <audio controls className="audio-player">
              <source src={item.track} type="audio/mpeg" />
            </audio>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
