// 7.3부터
import {
  BrowserRouter as Router,
  Routes, // Switch (v5) -> Routes (v6)
  Route
} from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail";
// 7.7부터 강의 듣기

function App() {
  return <Router>
    <Routes>
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>;
}

export default App;
