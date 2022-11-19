import React from "react";
import CarouselHome from "@components/carouselHome/CarouselHome";
import SectionTitle from "@components/sectionTitle/SectionTitle";
import ListProduct from "@components/listProduct/ListProduct";
import EventNews from "@components/eventNews/EventNews";

function Home() {
  return (
    <div>
      <CarouselHome />
      <SectionTitle title="sản phẩm bán chạy" />
      <ListProduct />
      <SectionTitle title="TIN TỨC VÀ SỰ KIỆN" />
      <EventNews />
    </div>
  );
}

export default Home;
