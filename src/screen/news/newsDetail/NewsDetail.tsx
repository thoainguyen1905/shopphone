import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import newsApi from "@services/newsApi";
import { LineHeight } from "@components/layouts/footer/FooterBody";

function NewsDetail() {
  const params: any = useParams();
  const [detail, setDetail] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await newsApi.getDetailNews(params.id);
        setDetail(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [params.id]);

  return (
    <WrapperMain>
      <ContentDes>
        <DetailsContent>
          <TextEvent className="">TIN TỨC VÀ SỰ KIỆN</TextEvent>
          <TextIntroduce className="mt-20">{detail?.title}</TextIntroduce>
          <LineHeight style={{ margin: "auto" }} className="mt-20" />
          <div className="mt-20">POSTED ON THÁNG HAI 7, 2020 BY ADMIN</div>
          <img
            src={
              detail?.imageUrl ||
              "https://hyundaitaibus.vn/wp-content/uploads/2021/01/unnamed-3.jpg"
            }
            alt=""
          />
          <Des dangerouslySetInnerHTML={{ __html: detail?.content }}></Des>
          <img
            src="https://hyundaitaibus.vn/wp-content/uploads/2021/01/unnamed-3.jpg"
            alt=""
          />
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
    height: 100%;
    width: 100%;
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

export default NewsDetail;
