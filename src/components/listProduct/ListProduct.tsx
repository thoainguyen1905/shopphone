import React from "react";
import styled from "styled-components";

function ListProduct() {
  return (
    <Box>
      <Item>
        <ImgCar
          src="https://hyundaitaibus.vn/wp-content/uploads/2022/05/Solati-cuu-thuong-anh-bia-1-247x185.png"
          alt=""
        />
        <TextCar>HYUNDAI SOLATI CỨU THƯƠNG</TextCar>
      </Item>
      <Item>
        <ImgCar
          src="https://hyundaitaibus.vn/wp-content/uploads/2021/01/d2f24e5f6ba493facab5-247x185.jpg"
          alt=""
        />
        <TextCar>HYUNDAI NEW MIGHTY 110SL 7T THÙNG DÀI 5M7</TextCar>
      </Item>
      <Item>
        <ImgCar
          src="https://hyundaitaibus.vn/wp-content/uploads/2021/01/xe_tai_ex_8-247x185.jpg"
          alt=""
        />
        <TextCar>Xe tải Hyundai New mighty 110SP 7 tấn</TextCar>
      </Item>
      <Item>
        <ImgCar
          src="https://hyundaitaibus.vn/wp-content/uploads/2021/01/hyunai_solati_15-600x345-1-247x185.jpg"
          alt=""
        />
        <TextCar>Xe tải Hyundai New mighty 110SP 7 tấn</TextCar>
      </Item>
      <Item>
        {" "}
        <ImgCar
          src="https://hyundaitaibus.vn/wp-content/uploads/2021/01/hyunai_solati_15-600x345-1-247x185.jpg"
          alt=""
        />
        <TextCar>Xe tải Hyundai New mighty 110SP 7 tấn</TextCar>
      </Item>
    </Box>
  );
}

const Box = styled.div`
  display: grid;
  width: 100%;
  padding: 0 15%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 20px;
  @media (max-width: 560px) {
    padding: 0px 10px;
    grid-template-columns: 1fr 1fr;
  }
`;

const ImgCar = styled.img`
  height: 185px;
  width: 100%;
  object-fit: fill;
`;

const TextCar = styled.div`
  text-align: justify;
  margin: 0px 15px;
  margin-top: 10px;
  font-size: 15px;
`;

const Item = styled.div`
  /* height: 260px; */
`;

export default ListProduct;
