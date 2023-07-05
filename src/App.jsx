import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import SignUp from "./Components/SignUp";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer autoClose={1000} position="top-right" />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
