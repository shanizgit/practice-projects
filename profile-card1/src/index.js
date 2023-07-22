import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="intro">
        <Intro />
        <Skilllist />
        <Skill />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="profile" src="Photos/istockphoto.jpg" alt="shanija" />;
}
function Intro() {
  return (
    <div className="intro">
      <h1>Shanija Chonary</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat
        debitis dicta ex, maxime tempore, dolorum quo obcaecati tempora
        molestiae est quasi quod illum iste illo repellendus temporibus
        consectetur earum?
      </p>
    </div>
  );
}
function Skilllist() {
  return (
    <div className="skill">
      <Skill name="HTML + CSS" emoji="🏆" color="red" />
      <Skill name="React" emoji="💥" color="blue" />
      <Skill name="JavaScript" emoji="🪙" color="green" />
      <Skill name="C++" emoji="🥲" color="yellow" />
      <Skill name="Git & GitHub" emoji="👶" color="purple" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill_content" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
