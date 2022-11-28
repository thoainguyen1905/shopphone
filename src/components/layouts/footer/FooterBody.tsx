import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
// import * as yup from "yup";
import contactApi from "@services/contactApi";
import { toasttifySuccess, toastifyError } from "@/utils/toastify";

function FooterBody() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    try {
      const output = { ...data, type: "CONTACT" };
      const res = await contactApi.createContact(output);
      if (res) {
        toasttifySuccess("Gửi thông tin liên hệ thành công");
      }
    } catch (error) {
      toastifyError(`${error}`);
      console.log(error);
    }
  };
  return (
    <WrapperMain>
      <ItemFooter>
        <img
          src="https://hyundaitaibus.vn/wps/wp-content/uploads/2021/01/ninhbinh-logo-300x57-1.png"
          alt=""
        />
        <p>
          Nhà Máy Hyundai Thành Công Ninh Bình hân hạnh chào đón Quý Khách đến
          trang web chính thức của chúng tôi bao gồm tất cả các hoạt động và các
          sự kiện của chúng tôi tại Việt Nam
        </p>
      </ItemFooter>
      <ItemFooter>
        <TitleBody>THÔNG TIN LIÊN HỆ</TitleBody>
        <LineHeight />
        <TitleBody>NHÀ MÁY HYUNDAI THÀNH CÔNG NINH BÌNH</TitleBody>
        <p>Địa chỉ: Lô C5, Khu Công Nghiệp Gián Khẩu, Gia Viễn, Ninh Bình</p>
        <p>Hotline: 0919 735 883</p>
        <p>Email: hyundaitaibus@gmail.com</p>
      </ItemFooter>
      <ItemFooter>
        <TitleBody>LIÊN HỆ VỚI CHÚNG TÔI</TitleBody>
        <LineHeight />
        <FormSubmit onSubmit={handleSubmit(onSubmit)}>
          <input
            id="name"
            {...register("name", { required: true, maxLength: 30 })}
            placeholder="Tên của bạn"
          />
          <input
            id="phone"
            {...register("phone", { required: true, maxLength: 30 })}
            placeholder="Số điện thoại*"
          />
          <input
            id="email"
            {...register("email", {
              required: true,
              maxLength: 30,
            })}
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
      </ItemFooter>
    </WrapperMain>
  );
}

const FormSubmit = styled.form`
  display: flex;
  flex-direction: column;
  input {
    height: 39px;
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
  }
`;
const WrapperMain = styled.div`
  width: 100%;
  height: 349px;
  padding: 0px 15%;
  padding-top: 30px;
  border-top: 1px solid #dadada;
  display: flex;
  gap: 70px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1200px) {
    padding: 0px 5%;
  }
  @media (max-width: 560px) {
    display: block;
    padding: 10px;
    height: auto;
  }
`;

const ItemFooter = styled.div`
  height: 100%;
  width: 100%;
  text-align: justify;
  p {
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
  }
  @media (max-width: 560px) {
    margin-bottom: 20px;
  }
`;

const TitleBody = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const LineHeight = styled.div`
  height: 4px;
  width: 30px;
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export default FooterBody;
