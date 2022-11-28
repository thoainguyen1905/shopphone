import React from "react";
import styled from "styled-components";
import { useNavigation } from "@hooks/useNavigation";
import { array } from "yup";

interface PropsType {
  data?: Array<[]> | [];
}

function ListProduct({ data }: PropsType) {
  const { navigate } = useNavigation();
  return (
    <Box>
      {data?.map((item: any) => (
        <Item
          key={item._id}
          onClick={() => {
            navigate(`/product/${item._id}`);
          }}
        >
          <ImgCar src={`${item.imageUrl[0]}`} alt="" />
          <TextCar>{item.name}</TextCar>
        </Item>
      ))}
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
