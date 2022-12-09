import React from "react";
import styled from "styled-components";
import LogoHyundai from "@assets/images/logo.png";

function HeaderTop({ scrollPosition }: any) {
  return (
    <WrapperHeader scrollPosition={scrollPosition}>
      <Logo src={LogoHyundai} alt="" />
      <IgText
        src={
          "https://hyundaitaibus.vn/wps/wp-content/uploads/2021/01/ninhbinh-logo-300x57-1.png"
        }
        alt=""
      />
    </WrapperHeader>
  );
}

const WrapperHeader: any = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 15%;
  background-color: ${(props: any) =>
    props.scrollPosition > 50 ? "rgba(255,255,255, 0.9)" : "none"};
`;

const IgText = styled.img`
  height: 57px;
  width: 300px;
`;

const Logo = styled.img`
  height: 27px;
  width: 200px;
`;

export default HeaderTop;
