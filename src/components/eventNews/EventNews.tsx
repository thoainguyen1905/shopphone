import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigation } from "@hooks/useNavigation";
import newsApi from "@services/newsApi";

function EventNews() {
  const { navigate } = useNavigation();
  const [listNews, setListNews] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      try {
        let page = 1;
        const res = await newsApi.getListNews(page);
        setListNews(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Box>
      {listNews?.map(({ content, _id, title, imageUrl }: any) => (
        <EventBox
          key={_id}
          onClick={() => {
            navigate(`/news/${_id}`);
          }}
        >
          <ImgEvent src={imageUrl} alt="" />
          <PostTitle>{title}</PostTitle>
          <DesTitle dangerouslySetInnerHTML={{ __html: content }}></DesTitle>
        </EventBox>
      ))}
    </Box>
  );
}

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  padding: 0 15%;
  margin: 20px 0px;
  @media (max-width: 1200px) {
    padding: 0 30px;
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    padding: 0px 10px;
  }
`;

const PostTitle = styled.h3`
  margin: 10px 20px 0px 20px;
  font-weight: 700;
  text-align: center;
`;

const DesTitle = styled.div``;

const EventBox = styled.div`
  text-align: center;
`;

const ImgEvent = styled.img`
  object-fit: fill;
  height: 240px;
  width: 100%;
`;

export default EventNews;
