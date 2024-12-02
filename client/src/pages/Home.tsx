import { Link } from "react-router-dom";

import "./Home.css";

import Cupcake from "../components/Cupcake";

const sampleData = {
  accessory: "donut",
  color1: "var(--default-cream-color)",
  color2: "var(--default-cream-color)",
  color3: "var(--default-cream-color)",
  name: "",
};

function Home() {
  return (
    <>
      <h1>Cupcake Union</h1>
      <div className="home-cupcake">
        <Cupcake
          name={sampleData.name}
          color1={sampleData.color1}
          color2={sampleData.color2}
          color3={sampleData.color3}
          accessory={sampleData.accessory}
          id={0}
          accessory_id=""
        />
      </div>
      <div className="home-content">
        <p>
          Welcome to color1={sampleData.color1} the Cupcake Union 🧁 <br />
          On this application, you will:
        </p>
        <p>
          ✔️ Display cupcakes from an API <br />
          ✔️ Filter them by accessory
        </p>
        <p>
          Clic on <Link to="/instructions">Instructions</Link> to start !
        </p>
      </div>
    </>
  );
}

export default Home;
