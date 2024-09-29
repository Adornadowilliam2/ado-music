import "./App.css";
import rule from "./assets/rule.mp3";
import mirror from "./assets/mirror.mp3";
import invincible from "./assets/invincible.mp3";

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
              src="https://th.bing.com/th?id=OIP.CodraPtAbjy19IEz1_NchQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&cb=13&pid=3.1&rm=2"
              alt="Album Art"
            />
          </div>
          <div className="track-list">
            <div className="track">
              <div className="track-card">
                <span>Track 1: Mirror</span>
                <audio controls>
                  <source src={mirror} type="audio/mpeg" />
                </audio>
              </div>
            </div>
            <div className="track">
              <div className="track-card">
                <span>Track 2: Rule</span>
                <audio controls>
                  <source src={rule} type="audio/mpeg" />
                </audio>
              </div>
            </div>
            <div className="track">
              <div className="track-card">
                <span>Track 3: Invincible</span>
                <audio controls>
                  <source src={invincible} type="audio/mpeg" />
                </audio>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
