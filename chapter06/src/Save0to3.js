// 6.0 ~ 6.3
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  /*const runOnlyOnce = () => {
    console.log("I run only once.");
  }*/
  const onChange = (event) => setKeyword(event.target.value);

  //console.log("render");
  console.log("I run all the time.");

  // 처음 render 할 때만 실행하고, state가 변할 때는 실행하지 않도록 해줌
  //useEffect(runOnlyOnce, []);
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  // keyword가 변할 때만 실행하고, 다른 변화에는 실행하지 않도록 해줌
  useEffect(() => {
    if(keyword !== "" && keyword.length >= 5) // keyword가 5글자 이상일 때부터 검색
      console.log("Search for", keyword);
  }, [keyword]);
  // keyword 또는 counter가 변할 때만 실행하고, 다른 변화에는 실행하지 않도록 해줌
  useEffect(() => {
    console.log("I run when 'keyword' & 'counter' changes.");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
