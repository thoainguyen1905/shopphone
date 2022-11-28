import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "@redux/store";
import { setModalRegister } from "@redux/slice/registerSlice";
import { Button, Modal } from "antd";

const ModalRegister: React.FC = () => {
  const openModal = useSelector(
    (state: AppState) => state.registerReducer.statusModal
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setModalRegister(true));
    }, 40000);
  }, [openModal]);

  const handleCancel = () => {
    dispatch(setModalRegister(false));
  };

  return (
    <>
      <Modal open={openModal} onCancel={handleCancel} footer={null} width={600}>
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
