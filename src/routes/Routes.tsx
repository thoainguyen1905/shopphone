import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "@components/loading/Loading";
import Header from "../components/layouts/header";
const Home = React.lazy(() => import("../screen/home/Home"));
const Contact = React.lazy(() => import("../screen/contact/Contact"));

function Main() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Main;
