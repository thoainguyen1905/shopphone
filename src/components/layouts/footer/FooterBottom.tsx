import React from "react";
import styled from "styled-components";
import Visa from "@assets/icons/visa.svg";
import Delivery from "@assets/icons/delivery.svg";
import Mastercard from "@assets/icons/mastercard.svg";

function FooterBottom() {
  return (
    <WrapperMain>
      <CopyText>
        Copyright 2020 © <span>HYUNDAITAIBUS.VN</span>
      </CopyText>
      <IconList>
        <img src={Visa} alt="" />
        <img src={Mastercard} alt="" />
        <img src={Delivery} alt="" />
      </IconList>
    </WrapperMain>
  );
}

const WrapperMain = styled.div`
  background-color: #5b5b5b;
  height: 79px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15%;
`;
const CopyText = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  span {
    font-weight: 600 !important;
  }
`;
const IconList = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 300px;
  img {
    width: 51px;
    height: 31px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 3px;
    margin: 0px 5px;
  }
`;
export default FooterBottom;
