import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "@components/loading/Loading";
import Header from "@components/layouts/header";
import Footer from "@components/layouts/footer";
import ModalRegister from "@components/modalRegister/ModalRegister";
const Home = React.lazy(() => import("../screen/home/Home"));
const News = React.lazy(() => import("../screen/news/News"));
const NewsDetail = React.lazy(
  () => import("../screen/news/newsDetail/NewsDetail")
);
const Register = React.lazy(() => import("../screen/register/Register"));
const Introduce = React.lazy(() => import("../screen/introduce/Introduce"));
const Contact = React.lazy(() => import("../screen/contact/Contact"));
const Product = React.lazy(() => import("../screen/product/Product"));
const ProductDetail = React.lazy(
  () => import("../screen/product/productDetail/ProductDetail")
);

function Main() {
  return (
    <BrowserRouter>
      <ModalRegister />
      <Suspense fallback={<Loading />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default Main;
