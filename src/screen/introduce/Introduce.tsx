import React from "react";
import styled from "styled-components";
import { LineHeight } from "@components/layouts/footer/FooterBody";

function Introduce() {
  return (
    <WrapperMain>
      <ContentDes>
        <DetailsContent>
          <TextEvent className="">TIN TỨC VÀ SỰ KIỆN</TextEvent>
          <TextIntroduce className="mt-20">Giới Thiệu</TextIntroduce>
          <LineHeight style={{ margin: "auto" }} className="mt-20" />
          <div className="mt-20">POSTED ON THÁNG HAI 7, 2020 BY ADMIN</div>
          <img
            src="https://hyundaitaibus.vn/wp-content/uploads/2021/01/buoi-toi-mat-tien-533x400.jpg"
            alt=""
          />
          <Des>
            Lời đầu tiên, Công ty Cổ phần Ô tô Thành Công Ninh Bình (Hyundai
            Ninh Bình) xin gửi đến Quý khách hàng lời chúc sức khỏe và lời chào
            trân trọng nhất. Cảm ơn Quý khách hàng đã luôn tín nhiệm sử dụng sản
            phẩm của chúng tôi trong suốt thời gian qua. Với phương châm “Niềm
            tin của khách hàng là mục tiêu phấn đấu”, chúng tôi luôn luôn không
            ngừng nỗ lực để mang tới cho Quý vị những sản phẩm hoàn hảo nhất.
          </Des>
          <img
            src="https://hyundaitaibus.vn/wp-content/uploads/2021/01/unnamed-3.jpg"
            alt=""
          />
          <Des>
            HYUNDAI NINH BÌNH được thành lập vào tháng 7 năm 2011 là một trong
            những đơn vị thành viên của Công ty CP Tập đoàn Thành Công
            (ThanhCong Group) – nhà phân phối và lắp ráp chính thức xe ô tô du
            lịch Hyundai, dịch vụ thay thế linh kiện chính hãng và bảo hành bảo
            dưỡng xe theo tiêu chuẩn toàn cầu của Hyundai toàn cầu. Với đội ngũ
            cán bộ nhân viên có trình độ cao và cơ sở hạ tầng được xây dựng hoàn
            toàn theo tiêu chuẩn tiên tiến nhất của Hyundai từ khu trưng bày sản
            phẩm, khu văn phòng, khu dịch vụ bán hàng cho đến khu nhà xưởng, sửa
            chữa bảo trì và bãi đỗ. Hyundai Ninh Bình có diện tích xây dựng rộng
            1000 m2 (trong tổng diện tích đất là 92 ha) với trang thiết bị hiện
            đại và đồng bộ. Ban lãnh đạo Công ty luôn luôn chú trọng vào việc
            đào tạo và nâng cao tay nghề, phong cách phục vụ, phép ứng xử trong
            giao tiếp với khách hàng cho nhân viên đặc biệt là kỹ thuật viên, tư
            vấn bán hàng nhằm mang đến cho khách hàng sự hài lòng cao nhất,
            chúng tôi tự tin rằng Hyundai Ninh Bình chính là sự lựa chọn đúng
            đắn của Quý vị.
          </Des>
          <img
            src="https://hyundaitaibus.vn/wp-content/uploads/2021/01/DSC01737-533x400.jpg"
            alt=""
          />
          <Des>
            Mục tiêu – Sứ mệnh Hyundai Ninh Bình đi vào hoạt động với phương
            châm thoả mãn tối đa nhu cầu của khách hàng. Ông Lê Thế Huynh, Giám
            đốc Hyundai Ninh Bình phát biểu “Chúng tôi hy vọng Hyundai Ninh Bình
            sẽ là địa điểm tin cậy và là nơi cung cấp sản phẩm, dịch vụ hoàn hảo
            nhất cho tất cả các khách hàng tại Việt Nam”.
          </Des>
        </DetailsContent>
      </ContentDes>
      <SibarRight>
        <TitleText style={{ fontSize: "14px", textAlign: "start" }}>
          TIN MỚI NHẤT
        </TitleText>
        <RencentText>
          <ImgContainer
            src="https://hyundaitaibus.vn/wp-content/uploads/2021/01/xe-tai-do-thanh-120sl-1024x768-1.jpg"
            alt=""
            style={{ height: "46px", width: "44px", marginRight: "10px" }}
          />
          <div>
            <div>SO SÁNH HYUNDAI MIGHTY EX8 VÀ HYUNDAI HD120SL</div>
            <DesRencent>Chức năng bình luận bị tắt</DesRencent>
          </div>
        </RencentText>
        <RencentText>
          <ImgContainer
            src="https://hyundaitaibus.vn/wp-content/uploads/2021/01/xe-tai-do-thanh-120sl-1024x768-1.jpg"
            alt=""
            style={{ height: "46px", width: "44px", marginRight: "10px" }}
          />
          <div>
            <div>SO SÁNH HYUNDAI MIGHTY EX8 VÀ HYUNDAI HD120SL</div>
            <DesRencent>Chức năng bình luận bị tắt</DesRencent>
          </div>
        </RencentText>
        <RencentText>
          <ImgContainer
            src="https://hyundaitaibus.vn/wp-content/uploads/2021/01/xe-tai-do-thanh-120sl-1024x768-1.jpg"
            alt=""
            style={{ height: "46px", width: "44px", marginRight: "10px" }}
          />
          <div>
            <div>SO SÁNH HYUNDAI MIGHTY EX8 VÀ HYUNDAI HD120SL</div>
            <DesRencent>Chức năng bình luận bị tắt</DesRencent>
          </div>
        </RencentText>
      </SibarRight>
    </WrapperMain>
  );
}

const ImgContainer = styled.img`
  width: 100%;
  object-fit: fill;
  height: 289px;
`;
const DesRencent = styled.div`
  color: #000001;
  font-size: 10px;
  font-weight: 700;
`;
const TitleText = styled.div`
  font-size: 26px;
  text-align: center;
  font-weight: 700;
`;
const SibarRight = styled.div`
  width: 100%;
  margin-left: 10px;
`;
const WrapperMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  width: 100%;
  padding: 0 15%;
  margin-top: 30px;
  margin-bottom: 40px;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }
`;
const RencentText = styled.div`
  border-bottom: 1px solid #ececec;
  width: 60%;
  padding-bottom: 20px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 560px) {
    width: 90%;
  }
`;
const DetailsContent = styled.div`
  width: 100%;
  padding: 30px;
  @media (max-width: 560px) {
    border-right: none;
    img {
      width: 100%;
    }
  }
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 22%);
  text-align: center;
  img {
    margin: 10px 0px;
  }
  &:hover {
    transform: translateY(-6px);
  }
  transition: opacity 0.3s, box-shadow 0.5s, transform 0.3s,
    -webkit-box-shadow 0.5s, -webkit-transform 0.3s;
`;
const TextEvent = styled.div`
  text-align: center;
  color: #abb8c3;
  font-weight: 600;
`;

const Des = styled.div`
  font-size: 18px;
  text-align: justify;
  margin: 10px 0px;
  @media (max-width: 560px) {
    font-size: 16px;
  }
`;

const TextIntroduce = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const ContentDes = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 50px;
  border-right: 1px solid rgb(238, 238, 238);
  @media (max-width: 560px) {
    padding-right: 0;
  }
`;

export default Introduce;
