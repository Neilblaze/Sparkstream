import * as React from "react";
import { render } from "react-dom";
import axios from "axios";

import "./styles.css";

const useLatency = () => {
  const [latency, setLatency] = React.useState(0);
  React.useEffect(() => {
    const measureLatency = async () => {
      const start = Date.now();
      await axios("/");
      const end = Date.now();
      setLatency(end - start);
    };
    setInterval(measureLatency, 3000);
    measureLatency();
  }, []);
  return latency;
};

function App() {
  const latency = useLatency();
  return (
    <div className="App">
      <h2>{latency}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);