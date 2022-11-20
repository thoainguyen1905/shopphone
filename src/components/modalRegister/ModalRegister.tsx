import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Modal } from "antd";

const ModalRegister: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);
  }, []);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsModalOpen(true);
    }, 25000);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        <TextTitle>Bảng Giá Ưu Đãi Hôm Nay</TextTitle>
        <TextTitle>
          <span>Tin nhắn bảng giá sẽ gửi tới số điện thoại của bạn sau </span>2
          phút
        </TextTitle>
        <InputText type="text" placeholder="Số điện thoại*" />
        <ButtonSubmit>GỬI YÊU CẦU</ButtonSubmit>
      </Modal>
    </>
  );
};

const TextTitle = styled.div`
  color: red;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  span {
    color: black;
  }
`;

const InputText = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  height: 39px;
  padding-left: 10px;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);
  margin-top: 10px;
`;

const ButtonSubmit = styled.button`
  width: 100%;
  height: 39px;
  background-color: #446084;
  color: white;
  font-weight: 700;
  border: none;
  margin: 10px 0px;
`;

export default ModalRegister;
