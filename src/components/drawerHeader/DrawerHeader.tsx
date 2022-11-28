import React from "react";
import styled from "styled-components";
import { useNavigation } from "@hooks/useNavigation";
import { Drawer, Input } from "antd";
const { Search } = Input;

interface PropsType {
  open?: boolean | undefined;
  onClose?: () => void;
}

const DrawerHeader: React.FC<PropsType> = ({ onClose, open }) => {
  const { navigate } = useNavigation();
  const labelList = [
    {
      name: "trang chủ",
      link: "",
    },
    {
      name: "sản phẩm",
      link: "/product",
    },
    {
      name: "giới thiệu",
      link: "/introduce",
    },
    {
      name: "đăng ký lái thử",
      link: "/register",
    },
    {
      name: "tin tức sự kiện",
      link: "/news",
    },
    {
      name: "liên hệ",
      link: "/contact",
    },
  ];
  return (
    <div>
      <Drawer
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={1}
      >
        <Search
          style={{ marginBottom: "20px" }}
          placeholder="Tìm kiếm ..."
          loading={true}
          enterButton
        />
        {labelList.map(({ name, link }) => (
          <Item
            onClick={() => {
              navigate(`${link}`);
              window.location.reload();
            }}
            key={link}
          >
            {name}{" "}
          </Item>
        ))}
      </Drawer>
    </div>
  );
};

const Item = styled.div`
  border-top: 1px solid #ececec;
  width: 120%;
  height: 50px;
  margin-left: -10%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: #949494;
  font-weight: 700;
`;

export default DrawerHeader;
