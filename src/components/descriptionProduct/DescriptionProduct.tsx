import React from "react";
import styled from "styled-components";
import { Tabs } from "antd";
import { Rate } from "antd";
import { useForm } from "react-hook-form";

function DescriptionProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Mô tả" key="1">
          Viết mô tả sản phẩm vào đây
        </Tabs.TabPane>
        <Tabs.TabPane tab="Đánh giá" key="2">
          <MainContainer>
            <TitleText>Đánh giá</TitleText>
            <div>Chưa có đánh giá nào</div>
            <TitleText>
              Hãy là người đầu tiên nhận xét “Hyundai HD1000”{" "}
            </TitleText>
            <div>Đánh giá của bạn *</div>
            <Rate
              onChange={(e) => {
                setValue("rate", e);
              }}
            />
            <FormSubmit onSubmit={handleSubmit(onSubmit)}>
              <textarea
                id="name"
                {...register("phone", { required: true, maxLength: 30 })}
                placeholder="Số điện thoại*"
              />
              <input
                id="name"
                {...register("name", { required: true, maxLength: 30 })}
                placeholder="Tên của bạn"
              />
              <input
                id="name"
                {...register("email", { required: true, maxLength: 30 })}
                placeholder="Email*"
              />
              {errors.name && errors.name.type === "required" && (
                <span>This is required</span>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <span>Max length exceeded</span>
              )}
              <button type="submit">GỬI ĐI</button>
            </FormSubmit>
          </MainContainer>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

const TitleText = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

const FormSubmit = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  input {
    height: 39px;
    outline: none;
    margin-bottom: 15px;
    padding-left: 15px;
    border: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);
  }
  textarea {
    height: 100px;
    outline: none;
    margin-bottom: 15px;
    padding-left: 15px;
    border: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);
  }
  button {
    background-color: #364d6a;
    border: none;
    height: 39px;
    color: white;
    font-weight: 700;
    width: 120px;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 30px 20px;
`;

export default DescriptionProduct;
