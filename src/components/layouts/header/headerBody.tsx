import React from "react";
import styled from "styled-components";

function HeaderBody() {
  return (
    <WrapperMain>
      <NavText>TRANG CHỦ</NavText>
      <NavText>SẢN PHẨM</NavText>
      <NavText>GIỚI THIỆU</NavText>
      <NavText>ĐĂNG KÝ LÁI THỬ</NavText>
      <NavText>TIN TỨC VÀ SỰ KIỆN</NavText>
      <NavText>LIÊN HỆ</NavText>
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

const NavText = styled.div`
  font-weight: 700;
  margin-right: 40px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-family: "Roboto";
`;

export default HeaderBody;
