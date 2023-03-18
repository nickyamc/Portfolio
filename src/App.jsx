import { Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Home from "./routes/Home";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
};

export default App;
