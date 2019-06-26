import React from "react";
import StopWatch, { StopWatchChildren } from "@felds/stopwatch";
import "./App.css";

const RenderFunction: StopWatchChildren = ({
  value,
  toggle,
  stop,
  isRunning,
}) => {
  const sec = Math.floor(value / 1000);
  const s = sec % 60;
  const m = Math.floor(sec / 60);
  const ms = Math.floor(value % 1000);

  return (
    <div className="cd">
      <div className="cd__display">
        <div className="cd__time">
          <span className="cd__m">{`00${m}`.substr(-2)}</span>:
          <span className="cd__s">{`00${s}`.substr(-2)}</span>
          <span className="cd__ms">.{`000${ms}`.substr(-3)}</span>
        </div>
      </div>

      <div className="cd__actions">
        <button className="cd__action cd__action--toggle" onClick={toggle}>
          {isRunning ? "Pause" : "Play"}
        </button>
        <button className="cd__action cd__action--stop" onClick={stop}>
          Stop
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <StopWatch children={RenderFunction} />
    </div>
  );
}

export default App;
