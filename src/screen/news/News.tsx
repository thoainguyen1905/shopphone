import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigation } from "@hooks/useNavigation";
import newsApi from "@services/newsApi";

function News() {
  const [listNew, setListNew] = useState<any>();
  const { navigate } = useNavigation();
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    const getData = async () => {
      try {
        const res: any = await newsApi.getListNews(page);
        setListNew(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <BoxMain>
      <ListNews>
        {listNew?.map((item: any) => (
          <ContainerNews key={item._id}>
            <EntryTitle>Tin tức và sự kiện</EntryTitle>
            <TitleText>{item.title}</TitleText>
            <TimeDate>POSTED ON THÁNG HAI 7, 2020 BY ADMIN</TimeDate>
            <FlexItem>
              <ImgContainer src={item.imageUrl} alt="" />
              <Des>
                <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
                <BtnCon
                  onClick={() => {
                    navigate(`/news/${item._id}`);
                  }}
                >
                  continue reading{" "}
                </BtnCon>
              </Des>
            </FlexItem>
          </ContainerNews>
        ))}
      </ListNews>
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
    </BoxMain>
  );
}

const BoxMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 0 15%;
  margin: 30px 0;
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
const EntryTitle = styled.div`
  text-align: center;
  text-transform: uppercase;
  color: #334862;
  font-size: 11px;
  font-weight: 700;
`;

const Des = styled.div`
  font-size: 17px;
  text-align: justify;
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

const FlexItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 0px 10px;
  margin-top: 10px;
  @media (max-width: 560px) {
    display: block;
  }
`;

const ImgContainer = styled.img`
  width: 100%;
  object-fit: fill;
  height: 289px;
`;

const BtnCon = styled.button`
  width: 166px;
  height: 30px;
  font-size: 12px;
  margin-top: 10px;
  color: #446084;
  font-weight: 600;
  text-transform: uppercase;
  background-color: white;
  border: 2px solid #446084;
`;

const TimeDate = styled.div`
  text-align: center;
  font-size: 14px;
`;

const SibarRight = styled.div`
  width: 100%;
  margin-left: 10px;
`;

const ListNews = styled.div`
  border-right: 1px solid #d1d1d1;
  @media (max-width: 560px) {
    border-right: none;
  }
`;
const ContainerNews = styled.div`
  height: 409px;
  width: 95%;
  padding-top: 10px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 22%);
  margin-bottom: 30px;
  :hover {
    transform: translateY(-6px);
    transition: 0.3s;
  }
  @media (max-width: 560px) {
    width: 100%;
    height: auto;
    padding-bottom: 10px;
  }
`;
export default News;
