import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Select, Pagination } from "antd";
import productApi from "@/services/productApi";
import ListProduct from "@components/listProduct/ListProduct";

function Product() {
  const handleChange = (value: string) => {
    setSort(value);
  };
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<string>("popular");
  const [totalPage, setTotalPage] = useState<number>(0);
  const [listProduct, setListProduct] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      try {
        const { data, total_pages }: any = await productApi.getListProductSort({
          page,
          sort,
        });
        setTotalPage(total_pages);
        setListProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [page, sort]);
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
              defaultValue="popular"
              style={{ width: 230 }}
              onChange={handleChange}
              options={[
                {
                  value: "popular",
                  label: "Thứ tự theo mức độ phổ biến",
                },
                {
                  value: "rating",
                  label: "Thứ tự theo điểm đánh giá",
                },
                {
                  value: "lastest",
                  label: "Mới nhất",
                },
                {
                  value: "priceAsc",
                  label: "Giá từ thấp đến cao",
                },
                {
                  value: "priceDesc",
                  label: "Giá từ cao đến thấp",
                },
              ]}
            />
          </SelectText>
        </FilterProduct>
      </MainProduct>
      <ListProduct data={listProduct} />
      <Pagination
        defaultCurrent={1}
        total={totalPage * 10}
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
        onChange={(e) => {
          setPage(e);
        }}
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
