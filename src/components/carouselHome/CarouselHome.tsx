import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerApi from "@services/bannerApi";

function CarouselHome() {
  const [listBanner, setListBanner] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await bannerApi.getListBanner();
        setListBanner(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
    >
      {listBanner?.map(({ imageUrl, _id }: any) => (
        <SwiperSlide key={_id}>
          {" "}
          <ContainerCarousel>
            <ContainerImg src={imageUrl} alt="" />
          </ContainerCarousel>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const ContainerCarousel = styled.div`
  height: 600px;
  width: 100%;
  @media (max-width: 560px) {
    height: 250px;
  }
`;
const ContainerImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

export default CarouselHome;
