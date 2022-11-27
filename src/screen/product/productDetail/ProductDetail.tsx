import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Breadcrumb } from "antd";
import { useParams } from "react-router-dom";
import productApi from "@/services/productApi";
import SliderDetail from "@components/sliderDetail/SliderDetail";
import SocialIcon from "@components/socialIcon/SocialIcon";
import { LineHeight } from "@components/layouts/footer/FooterBody";
import DescriptionProduct from "@components/descriptionProduct/DescriptionProduct";

function ProductDetail() {
  const params: any = useParams();
  const [listImg, setListImg] = useState<any>();
  useEffect(() => {
    const getDetail = async () => {
      try {
        const { imageUrl }: any = await productApi.getDetailProduct(params.id);
        setListImg(imageUrl);
      } catch (error) {
        console.log(error);
      }
    };
    getDetail();
  }, []);
  return (
    <MainContainer>
      <FlexItem>
        <SliderDetail data={listImg} />
        <DetailRight>
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href="/">TRANG CHỦ</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/">XE HUYNDAI </a>
            </Breadcrumb.Item>
          </Breadcrumb>
          <TitleText>Hyundai HD 270</TitleText>
          <LineHeight></LineHeight>
          <TitleText
            style={{ color: "#0000FF", fontSize: "20px", textAlign: "center" }}
          >
            NHÀ MÁY HYUNDAI NINH BÌNH
          </TitleText>
          <TextOrigin>
            <span> Giá bán chính gốc từ nhà máy</span>, Đảm bảo{" "}
            <span style={{ color: "red" }}>GIÁ TỐT NHẤT</span> khi liên hệ trực
            tiếp.
          </TextOrigin>
          <ButtonAlert color="#288ad6">
            <div>Nhận khuyến mãi</div>
            <div>Đăng ký nhận khuyến mãi trong tháng</div>
          </ButtonAlert>
          <ButtonAlert color="#fd6e1d">
            <div>Nhận khuyến mãi</div>
            <div>Đăng ký nhận khuyến mãi trong tháng</div>
          </ButtonAlert>
          <SocialIcon />
        </DetailRight>
      </FlexItem>
      <DescriptionProduct />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding: 0 15%;
  width: 100%;
  margin-top: 40px;
  overflow: hidden;
  @media (max-width: 1200px) {
    padding: 0px;
  }
`;

const FlexItem = styled.div`
  display: flex;
  border-bottom: 0.5px solid #dadada;
  @media (max-width: 960px) {
    display: block;
  }
`;
const DetailRight = styled.div`
  height: 100%;
  width: 30%;
  margin-left: 50px;
  @media (max-width: 960px) {
    width: 100%;
    margin-left: 0px;
  }
`;
const TextOrigin = styled.div`
  font-size: 18px;
  margin-top: 10px;
  span {
    color: #0000ff;
    font-weight: 700;
  }
  p {
    color: red;
  }
`;
const ButtonAlert = styled.button`
  background-color: ${(props) => props.color};
  height: 55px;
  border: none;
  border-radius: 5px;
  width: 420px;
  color: white;
  margin-top: 20px;
  div:nth-child(1) {
    font-weight: 700;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;
const TitleText = styled.div`
  font-weight: 700;
  font-size: 26px;
`;
export default ProductDetail;
