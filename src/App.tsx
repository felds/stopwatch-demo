import React from "react";
import StopWatch, { StopWatchChildren } from "@felds/stopwatch";
import classnames from "classnames";

const RenderFunction: StopWatchChildren = ({
  value,
  toggle,
  stop,
  isRunning,
  isFinished,
}) => {
  const sec = Math.floor(value / 1000);
  const s = sec % 60;
  const m = Math.floor(sec / 60);
  const ms = Math.floor(value % 1000);

  return (
    <div className={classnames("cd", isFinished && "cd--is-finished")}>
      <div className="cd__display">
        <div className="cd__time">
          <span className="cd__m">{`00${m}`.substr(-2)}</span>:
          <span className="cd__s">{`00${s}`.substr(-2)}</span>
          <span className="cd__ms">.{`000${ms}`.substr(-3)}</span>
        </div>

        <div className="cd__duration">01:30</div>
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
  const duration = 90000; // 90 secs

  return (
    <div>
      <StopWatch children={RenderFunction} duration={duration} />
    </div>
  );
}

export default App;
