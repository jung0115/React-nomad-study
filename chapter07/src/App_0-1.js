import { useState } from "react";
// 7.0~7.1

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = ( event ) => setToDo(event.target.value);
  const onSubmit = ( event ) => {
    event.preventDefault();
    //console.log(toDo);
    if(toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  //console.log(toDo);
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
