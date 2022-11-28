import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Main from "./routes/Routes";

function App() {
  return (
    <>
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
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Main />
    </>
  );
}

export default App;
