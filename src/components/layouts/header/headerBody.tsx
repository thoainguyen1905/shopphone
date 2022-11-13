import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useNavigation } from "../../../hooks/useNavigation";

function HeaderBody() {
  const { navigate } = useNavigation();
  const location = useLocation();

  return (
    <WrapperMain>
      <NavText
        data="/"
        location={location.pathname}
        onClick={() => {
          navigate("/");
        }}
      >
        TRANG CHỦ
      </NavText>
      <NavText
        data="/product"
        location={location.pathname}
        onClick={() => {
          navigate("/product");
        }}
      >
        SẢN PHẨM
      </NavText>
      <NavText
        location={location.pathname}
        data="/introduce"
        onClick={() => {
          navigate("/introduce");
        }}
      >
        GIỚI THIỆU
      </NavText>
      <NavText
        data="/register"
        location={location.pathname}
        onClick={() => {
          navigate("/register");
        }}
      >
        ĐĂNG KÝ LÁI THỬ
      </NavText>
      <NavText
        data="/news"
        location={location.pathname}
        onClick={() => {
          navigate("/news");
        }}
      >
        TIN TỨC VÀ SỰ KIỆN
      </NavText>
      <NavText
        data="/contact"
        location={location.pathname}
        onClick={() => {
          navigate("/contact");
        }}
      >
        LIÊN HỆ
      </NavText>
    </WrapperMain>
  );
}

const WrapperMain = styled.div`
  height: 56px;
  width: 100%;
  padding: 0px 15%;
  background-color: #015287;
  display: flex;
  align-items: center;
`;

const NavText: any = styled.div`
  font-weight: 700;
  margin-right: 40px;
  font-size: 16px;
  color: ${(props: any) =>
    props.data === props.location ? "white" : "rgba(255, 255, 255, 0.8)"};
  font-family: "Roboto";
`;

export default HeaderBody;
