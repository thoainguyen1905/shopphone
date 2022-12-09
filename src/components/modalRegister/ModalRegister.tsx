import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import contactApi from "@services/contactApi";
import { AppState } from "@redux/store";
import { setModalRegister } from "@redux/slice/registerSlice";
import { Modal } from "antd";
import { toastifyError, toasttifySuccess } from "@/utils/toastify";

const ModalRegister: React.FC = () => {
  const openModal = useSelector(
    (state: AppState) => state.registerReducer.statusModal
  );

  const dispatch = useDispatch();
  const [phone, setPhone] = useState<number>();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setModalRegister(true));
    }, 40000);
  }, [openModal]);
  const onSubmit = async () => {
    try {
      await contactApi.createContact({
        type: "CONTACT",
        phone: phone,
      });
      toasttifySuccess("Gửi thông tin thành công");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      toastifyError("Đã có lỗi xảy ra");
    }
  };
  const handleCancel = () => {
    dispatch(setModalRegister(false));
  };

  return (
    <Main>
      <Modal
        open={openModal}
        onCancel={handleCancel}
        footer={null}
        width={600}
        bodyStyle={{ border: "3px solid #1e73be", borderRadius: "20px" }}
        maskStyle={{ borderRadius: "10px" }}
      >
        <TextTitle>Bảng Giá Ưu Đãi Hôm Nay</TextTitle>
        <TextTitle>
          <span>Tin nhắn bảng giá sẽ gửi tới số điện thoại của bạn sau </span>2
          phút
        </TextTitle>
        <InputText
          type="number"
          pattern="[0-9]*"
          placeholder="Số điện thoại*"
          onChange={(e: any) => setPhone(e.target.value)}
        />
        <ButtonSubmit onClick={onSubmit}>GỬI YÊU CẦU</ButtonSubmit>
      </Modal>
    </Main>
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

const Main = styled.div`
  .ant-modal-content {
    border-radius: 10px !important;
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
