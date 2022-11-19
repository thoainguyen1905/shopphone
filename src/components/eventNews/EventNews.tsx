import React from "react";
import styled from "styled-components";

function EventNews() {
  return (
    <Box>
      <EventBox>
        <ImgEvent
          src="https://hyundaitaibus.vn/wp-content/uploads/2020/02/post1-unnamed-7-300x225-1.jpg"
          alt=""
        />
        <PostTitle>Giới Thiệu</PostTitle>
        <DesTitle>
          Lời đầu tiên, Công ty Cổ phần Ô tô Thành Công Ninh Bình (Hyundai Ninh
          [...]{" "}
        </DesTitle>
      </EventBox>

      <EventBox>
        <ImgEvent
          src="https://hyundaitaibus.vn/wp-content/uploads/2020/02/post1-unnamed-7-300x225-1.jpg"
          alt=""
        />
        <PostTitle>
          TC MOTOR KHÁNH THÀNH TRUNG TÂM TRẢI NGHIỆM HYUNDAI
        </PostTitle>
        <DesTitle>
          Hà Nội, ngày 3/1/2020 – TC MOTOR chính thức khánh thành Trung tâm trải
          nghiệm [...]{" "}
        </DesTitle>
      </EventBox>
      <EventBox>
        <ImgEvent
          src="https://hyundaitaibus.vn/wp-content/uploads/2020/02/post1-unnamed-7-300x225-1.jpg"
          alt=""
        />
        <PostTitle>CÓ NÊN MUA XE TẢI HYUNDAI MIGHTY EX8 HAY KHÔNG?</PostTitle>
        <DesTitle>
          Hyundai Mighty Ex8 thuộc series Ex bao gồm Hyundai Mighty Ex6, Hyundai
          Mighty Ex8, Hyundai [...]{" "}
        </DesTitle>
      </EventBox>
      <EventBox>
        {" "}
        <ImgEvent
          src="https://hyundaitaibus.vn/wp-content/uploads/2020/02/post1-unnamed-7-300x225-1.jpg"
          alt=""
        />
        <PostTitle>CÓ NÊN MUA XE TẢI HYUNDAI MIGHTY EX8 HAY KHÔNG?</PostTitle>
        <DesTitle>
          Hyundai Mighty Ex8 thuộc series Ex bao gồm Hyundai Mighty Ex6, Hyundai
          Mighty Ex8, Hyundai [...]{" "}
        </DesTitle>
      </EventBox>
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
