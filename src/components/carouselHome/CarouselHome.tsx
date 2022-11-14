import React from "react";
import styled from "styled-components";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function CarouselHome() {
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
      <SwiperSlide>
        {" "}
        <ContainerCarousel>
          <ContainerImg
            src={
              "https://file.hstatic.net/200000144777/file/apple_iphone13_colors_09142021_big.jpg.large_c3a69d0ee4774b12a58836b1fba2334b.jpg"
            }
            alt=""
          />
        </ContainerCarousel>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <ContainerCarousel>
          <ContainerImg
            src={
              "https://media.vneconomy.vn/w800/images/upload/2021/12/29/iphone-13-pro-max.jpg"
            }
            alt=""
          />
        </ContainerCarousel>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <ContainerCarousel>
          <ContainerImg
            src={
              "https://file.hstatic.net/200000144777/file/apple_iphone13_colors_09142021_big.jpg.large_c3a69d0ee4774b12a58836b1fba2334b.jpg"
            }
            alt=""
          />
        </ContainerCarousel>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <ContainerCarousel>
          <ContainerImg
            src={
              "https://media.vneconomy.vn/w800/images/upload/2021/12/29/iphone-13-pro-max.jpg"
            }
            alt=""
          />
        </ContainerCarousel>
      </SwiperSlide>
    </Swiper>
  );
}

const ContainerCarousel = styled.div`
  height: 500px;
  width: 100%;
  @media (max-width: 560px) {
    height: 300px;
  }
`;
const ContainerImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

export default CarouselHome;
