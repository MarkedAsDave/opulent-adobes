import { useState } from "react";
import OpulentLogo from "./assets/LOGO-SOLO-Opulent.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}

        <img src={OpulentLogo} className="logo" alt="logo" />
      </div>
      <h1>Opulent Adobes</h1>
      <h2>Coming Soon!</h2>
      <div style={{ color: "white", marginTop: "20%" }}>
        <h4>Site Tour Scheduler is under development.</h4>
        <a href="https://www.facebook.com/profile.php?id=61558432993334" target="_blank">
          <h4>Please send a direct message to our Facebook page for inquiries.</h4>
        </a>
      </div>
    </>
  );
}

export default App;
