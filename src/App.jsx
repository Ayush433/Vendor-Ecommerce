import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import SignUp from "./Components/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import BestSelling from "./Pages/BestSelling";
import AllEvents from "./Pages/AllEvents";
import FAQPage from "./Pages/FAQPages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/best-selling" element={<BestSelling />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
