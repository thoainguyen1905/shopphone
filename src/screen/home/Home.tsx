import React, { useEffect, useState } from "react";
import productApi from "@services/productApi";
import CarouselHome from "@components/carouselHome/CarouselHome";
import SectionTitle from "@components/sectionTitle/SectionTitle";
import ListProduct from "@components/listProduct/ListProduct";
import EventNews from "@components/eventNews/EventNews";

function Home() {
  const [listProduct, setListProduct] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      try {
        let page = 1;
        const { data }: any = await productApi.getListProduct(page);
        setListProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <CarouselHome />
      <SectionTitle title="sản phẩm bán chạy" />
      <ListProduct data={listProduct} />
      <SectionTitle title="TIN TỨC VÀ SỰ KIỆN" />
      <EventNews />
    </div>
  );
}

export default Home;
