import React, { useState } from "react";
import StopWatch, { StopWatchChildren } from "stopwatch";
import "./App.css";

const StopWatchRender: StopWatchChildren = ({
  value,
  toggle,
  play,
  pause,
  stop,
  isFinished,
  isRunning,
}) => {
  return (
    <dl>
      <dt>Elapsed</dt>
      <dd> {(value / 1000).toFixed(5)}</dd>

      <dt>Is running?</dt>
      <dd>{isRunning ? "T" : "F"}</dd>

      <dt>Is finished</dt>
      <dd>{isFinished ? "T" : "F"}</dd>

      <dt>Actions</dt>
      <dd>
        <button onClick={play}>play</button>
        <button onClick={pause}>pause</button>
        <button onClick={toggle}>toggle</button>
        <button onClick={stop}>stop</button>
      </dd>
    </dl>
  );
};

function App() {
  const [time, setTime] = useState(0);

  const handleChange = (newTime: number) => {
    const diff = newTime - time;
    console.log(`Difference in time: ${diff.toFixed(5)}`);
    setTime(newTime);
  };

  return (
    <div>
      <div className="cd">
        <div className="cd__display">
          <div className="cd__time">
            <span className="cd__m">00</span>:<span className="cd__s">00</span>
            <span className="cd__ms">.000</span>
          </div>
        </div>

        <div className="cd__actions">
          <button className="cd__toggle">Toggle</button>
          <button className="cd__stop">Stop</button>
        </div>
      </div>

      <StopWatch
        initialValue={1000}
        children={StopWatchRender}
        onFinish={() => alert("CABO")}
        duration={3000}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
