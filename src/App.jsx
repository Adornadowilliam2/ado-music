import { data } from "./index.js";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Albums</a>
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
              src="https://raw.githubusercontent.com/Adornadowilliam2/images/4f4962cff0982f3c179a2e3d1dba02e3ce131a5e/images.jpeg"
              alt="Album Art"
            />
          </div>
          <div className="track-list">
            {data.map((item) => (
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
    </>
  );
}

export default App;
