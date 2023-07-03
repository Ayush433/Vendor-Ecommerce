import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import SignUp from "./Components/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
