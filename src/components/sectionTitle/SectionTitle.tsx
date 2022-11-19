import React from "react";
import styled from "styled-components";

interface PropsType {
  title?: string;
}

const SectionTitle: React.FC<PropsType> = ({ title }) => {
  return (
    <WrapperSection>
      <Line />
      <Item>{title} </Item>
      <Line />
    </WrapperSection>
  );
};

const WrapperSection = styled.div`
  width: 70%;
  margin: auto;
  position: relative;
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 0.6fr 1fr;
  align-items: center;
  @media (max-width: 1440px) {
    width: 100%;
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr 2fr 1fr;
  }
`;
const Item = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.1);
  height: 52px;
  text-transform: uppercase;
  z-index: 5;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: rgb(1, 82, 135);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  @media (max-width: 960px) {
    font-size: 20px;
  }
  @media (max-width: 560px) {
    font-size: 16px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export default SectionTitle;
