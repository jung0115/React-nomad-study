// 6.4 Cleanup
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Created :)");

    //component가 사라질 때 실행
    return () => console.log("Destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>
        {showing ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;
