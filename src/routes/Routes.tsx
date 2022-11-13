import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "@components/loading/Loading";
import Header from "@components/layouts/header";
import Footer from "@components/layouts/footer";
const Home = React.lazy(() => import("../screen/home/Home"));
const News = React.lazy(() => import("../screen/news/News"));
const Register = React.lazy(() => import("../screen/register/Register"));
const Product = React.lazy(() => import("../screen/product/Product"));
const Introduce = React.lazy(() => import("../screen/introduce/Introduce"));
const Contact = React.lazy(() => import("../screen/contact/Contact"));

function Main() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/news" element={<News />} />
          <Route path="/product " element={<Product />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default Main;
