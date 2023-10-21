import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  min-width: 17vmax;
  cursor: pointer;
  padding: 1vmax 0;
`;

const Image = styled.img`
  width: 100%;
  height: 15vmax;
  object-fit: contain;
  padding: 1vmax;
  background-color: rgb(247, 248, 248);
`;

const Details = styled.div``;

const Head = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  font-size: 0.8vmax;
  gap: 0.5vmax;
`;

const Offer = styled.div`
  padding: 0.3vmax;
  background-color: rgb(204, 12, 57);
  color: #fefefe;
`;
const Span = styled.div`
  color: rgb(204, 12, 57);
`;

const Info = styled.div`
  font-size: 0.8vmax;
`;

const SliderItem = () => {
  return (
    <Container>
      <Image src="https://m.media-amazon.com/images/I/51PPxZWH88L._AC_SY200_.jpg" />
      <Details>
        <Head>
          <Offer>Up to 89% off</Offer>
          <Span>Great India Festival</Span>
        </Head>
        <Info>Diwali Sales Prices live on Smarthwatch...</Info>
      </Details>
    </Container>
  );
};

export default SliderItem;
