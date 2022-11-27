import React from "react";
import styled from "styled-components";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiPinterestFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";

function SocialIcon() {
  return (
    <div className="flex mt-20 alignCenter">
      <WrapperIcon>
        <BsFacebook size={20} color="silver" />
      </WrapperIcon>
      <WrapperIcon>
        <BsTwitter size={20} color="silver" />
      </WrapperIcon>
      <WrapperIcon>
        <HiOutlineMail size={20} color="silver" />
      </WrapperIcon>
      <WrapperIcon>
        <RiPinterestFill size={20} color="silver" />
      </WrapperIcon>
      <WrapperIcon>
        <AiFillLinkedin size={20} color="silver" />
      </WrapperIcon>
    </div>
  );
}

const WrapperIcon = styled.div`
  border-radius: 50px;
  height: 32px;
  width: 32px;
  border: 3px solid silver;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export default SocialIcon;
