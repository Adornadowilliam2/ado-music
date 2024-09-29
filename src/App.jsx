import "./App.css";
import rule from "./assets/rule.mp3";
import mirror from "./assets/mirror.mp3";
import invincible from "./assets/invincible.mp3";
import ruletrack from "./assets/rule.png";
import mirrortrack from "./assets/mirror.png";
import invincibletrack from "./assets/invincible.png";
import newgenesistrack from "./assets/newgenesis.png";
import useewatrack from "./assets/useewa.png";
import kurakuratrack from "./assets/kurakura.png";
import newgenesis from "./assets/newgenesis.mp3";
import useewa from "./assets/useewa.mp3";
import kurakura from "./assets/kurakura.mp3";
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
            <div className="track">
              <div className="track-card">
                <img src={mirrortrack} alt="mirror soundtrack bg" />
                <span>Track 1: Mirror</span>
                <audio controls>
                  <source src={mirror} type="audio/mpeg" />
                </audio>
              </div>
            </div>
            <div className="track">
              <div className="track-card">
                <img src={ruletrack} alt="rule soundtrack bg" />
                <span>Track 2: Rule</span>
                <audio controls>
                  <source src={rule} type="audio/mpeg" />
                </audio>
              </div>
            </div>
            <div className="track">
              <div className="track-card">
                <img src={invincibletrack} alt="invincible soundtrack bg" />
                <span>Track 3: Invincible</span>
                <audio controls>
                  <source src={invincible} type="audio/mpeg" />
                </audio>
              </div>
            </div>
          </div>
          <div className="track-list">
            <div className="track">
              <div className="track-card">
                <img src={useewatrack} alt="useewa soundtrack bg" />
                <span>Track 4: Useewa</span>
                <audio controls>
                  <source src={useewa} type="audio/mpeg" />
                </audio>
              </div>
            </div>
            <div className="track">
              <div className="track-card">
                <img src={kurakuratrack} alt="kura kura soundtrack bg" />
                <span>Track 5: Kura Kura</span>
                <audio controls>
                  <source src={kurakura} type="audio/mpeg" />
                </audio>
              </div>
            </div>
            <div className="track">
              <div className="track-card">
                <img src={newgenesistrack} alt="new genesis soundtrack bg" />
                <span>Track 6: New Genesis</span>
                <audio controls>
                  <source src={newgenesis} type="audio/mpeg" />
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
