import React from "react";
import styled from "styled-components";
import useContact from "@hooks/useContact";
import { useForm } from "react-hook-form";

function Register() {
  const { onCreateNewContact } = useContact();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data: any) => {
    onCreateNewContact(data);
    reset();
  };
  return (
    <WrapperMain>
      <Title>ĐĂNG KÝ LÁI THỬ</Title>
      <FormSubmit onSubmit={handleSubmit(onSubmit)}>
        <input
          id="name"
          {...register("name", { required: true, maxLength: 30 })}
          placeholder="Tên của bạn*"
        />
        <input
          id="name"
          {...register("phone", { required: true, maxLength: 30 })}
          placeholder="Số điện thoại*"
        />
        <textarea
          id="name"
          {...register("description", { required: true, maxLength: 30 })}
          placeholder="Nội dung lời nhắn*"
        />
        {errors.name && errors.name.type === "required" && (
          <span>This is required</span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <span>Max length exceeded</span>
        )}
        <button type="submit">ĐĂNG KÝ</button>
      </FormSubmit>
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
  textarea {
    height: 100px;
    margin-bottom: 15px;
    padding-left: 15px;
    border: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);
  }
`;
const WrapperMain = styled.div`
  width: 100%;
  height: 458px;
  margin-bottom: 30px;
  padding: 0px 15%;
  @media (max-width: 960px) {
    padding: 0px 5%;
  }
`;

const Title = styled.div`
  color: red;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-top: 30px;
  @media (max-width: 560px) {
    font-size: 20px;
  }
`;

export default Register;
