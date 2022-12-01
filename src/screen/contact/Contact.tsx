import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import useContact from "@hooks/useContact";

function Contact() {
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
    <Main>
      <ContactForm>
        <Title>LIÊN HỆ VỚI CHÚNG TÔI</Title>
        <p>
          Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi
          sẽ liên lạc lại với bạn sớm nhất có thể.
        </p>
        <FormSubmit onSubmit={handleSubmit(onSubmit)}>
          <input
            id="name"
            {...register("name", { required: true, maxLength: 30 })}
            placeholder="Tên của bạn*"
          />
          <input
            id="phone"
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
          <button type="submit">GỬI LỜI NHẮN</button>
        </FormSubmit>
      </ContactForm>
      <ContactForm>
        <Title>THÔNG TIN LIÊN HỆ</Title>
        <LineHeight />
        <p>Địa chỉ: Lô C5, Khu Công Nghiệp Gián Khẩu, Gia Viễn, Ninh Bình</p>
        <p>Hotline: 0919 735 883</p>
        <p>Email: hyundaitaibus@gmail.com</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7481.9724853660955!2d105.927019!3d20.342187!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4f13416c035f1289!2zSFlVTkRBSSBUSMOATkggQ8OUTkcgTklOSCBCw4xOSA!5e0!3m2!1sen!2sus!4v1668353397160!5m2!1sen!2sus"
          width="100%"
          height="400"
          loading="lazy"
          style={{ border: "none" }}
        ></iframe>
      </ContactForm>
    </Main>
  );
}

const Main = styled.div`
  padding: 0 15%;
  height: 700px;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  padding-top: 30px;
  gap: 60px;
  @media (max-width: 560px) {
    display: block;
    padding: 15px;
    height: auto;
  }
  @media (max-width: 1200px) {
    padding: 10px 5%;
  }
`;

const ContactForm = styled.div`
  p {
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
  }
`;
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
const LineHeight = styled.div`
  height: 4px;
  width: 30px;
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.1);
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 5px;
`;

export default Contact;
