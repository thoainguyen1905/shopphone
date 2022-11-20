import React from "react";
import styled from "styled-components";
import { Select, Pagination } from "antd";
import ListProduct from "@components/listProduct/ListProduct";

function Product() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <MainProduct>
        <FilterProduct>
          <StyleBreadCrum>
            TRANG CHỦ / <span>XE HUYNDAI</span>
          </StyleBreadCrum>
          <SelectText>
            <div className="mr-20">Hiển thị 1–15 của 18 kết quả</div>
            <Select
              defaultValue="lucy"
              style={{ width: 230 }}
              onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Thứ tự theo mức độ phổ biến",
                },
                {
                  value: "lucy",
                  label: "Thứ tự mặc định",
                },
                {
                  value: "disabled",
                  label: "Thứ tự theo điểm đánh giá",
                },
                {
                  value: "Yiminghe",
                  label: "Mới nhất",
                },
                {
                  value: "Yiminghe",
                  label: "Giá từ thấp đến cao",
                },
                {
                  value: "Yiminghe",
                  label: "Giá từ cao đến thấp",
                },
              ]}
            />
          </SelectText>
        </FilterProduct>
      </MainProduct>
      <ListProduct />
      <Pagination
        defaultCurrent={1}
        total={50}
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      />
    </>
  );
}

const MainProduct = styled.div`
  width: 100%;
  padding: 0 15%;
  @media (max-width: 560px) {
    padding: 0;
  }
`;

const StyleBreadCrum = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: rgba(102, 102, 102, 0.7);
  span {
    color: black;
  }
  @media (max-width: 560px) {
    text-align: center;
    margin-bottom: 10px;
  }
`;
const FilterProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 30px 0px;
  @media (max-width: 560px) {
    display: block;
  }
`;

const SelectText = styled.div`
  display: flex;
  align-items: center;
`;

export default Product;
