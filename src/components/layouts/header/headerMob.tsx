import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import DrawerHeader from "@components/drawerHeader/DrawerHeader";
import { useNavigation } from "@hooks/useNavigation";
import { Row, Col } from "antd";
import styled from "styled-components";

function HeaderMob() {
  const [open, setOpen] = useState<boolean>(false);
  const onClose = () => {
    setOpen(false);
  };
  const { navigate } = useNavigation();
  return (
    <MainMob>
      <Col span={4} offset={1}>
        <MdOutlineMenu
          size={30}
          onClick={() => {
            setOpen(true);
          }}
        />
      </Col>
      <Col span={12} offset={2}>
        <Logo
          src="https://hyundaitaibus.vn/wps/wp-content/uploads/2021/01/hyundai-logo-top.png"
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
      </Col>
      <DrawerHeader open={open} onClose={onClose} />
    </MainMob>
  );
}

const MainMob = styled(Row)`
  height: 70px;
  align-items: center;
`;

const Logo = styled.img`
  height: 27px;
  width: 200px;
`;

export default HeaderMob;
