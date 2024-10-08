import React from "react";
import aizen from "../assets/bleach/aizen.jpg";
import trachery from "../assets/bleach/trachery.mp3";
import { Link } from "react-router-dom";
export default function Aizen() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Aizen Trachery Song</h1>
      <img
        src={aizen}
        alt="Aizen Sosuke"
        style={{ width: "200px", minWidth: "100%", margin: "10px" }}
      />
      <audio src={trachery} controls autoPlay loop />
      <p style={{ margin: "10px" }}>
        I can tell that you've never been true to me <br />I can smell that
        you're acting so fearfully <br /> I can hear what you're hoping I want
        to hear <br /> I can feel the alarm bells are ringing in me <br /> I can
        touch but I know you don't feel a thing <br /> I can pray but I know you
        commit a sin <br /> I can sense now it's all become clear to see <br />{" "}
        You're no good, and you mean no good treacherously <br />
        <br /> I can tell that you've never been true to me <br /> I can smell
        that you're acting so fearfully <br /> I can hear what you're hoping I
        want to hear <br /> I can feel the alarm bells are ringing in me <br />{" "}
        I can touch but I know you don't feel a thing <br /> I can pray but I
        know you commit a sin <br /> I can sense now it's all become clear to
        see <br /> You're no good, and you mean no good treacherously <br />
        <br /> I can tell that you've never been true to me <br /> I can smell
        that you're acting so fearfully <br /> I can hear what you're hoping I
        want to hear <br /> I can feel the alarm bells are ringing in me <br />{" "}
        I can touch but I know you don't feel a thing <br /> I can pray but I
        know you commit a sin <br /> I can sense now it's all become clear to
        see <br /> You're no good, and you mean no good treacherously
      </p>
      <Link to="/album">Back to Album</Link>
    </div>
  );
}
