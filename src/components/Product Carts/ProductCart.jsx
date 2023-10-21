import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 400px;
  width: 350px;
  padding: 1vmax;
  background-color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 1.3vmax;
  font-weight: 700;
`;

const Wrapper = styled.div`
  height: 300px;
  display: grid;
  grid-template-columns: 150px 150px;
  grid-template-rows: 150px 150px;
  gap: 1vmax;
  overflow: hidden;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Image = styled.img`
  height: 75%;
  width: 100%;
  object-fit: cover;
`;

const Info = styled.p`
  height: 25%;
  width: 100%;
  font-size: 0.8vmax;
`;

const Bottom = styled.div`
  font-size: 0.8vmax;

  a {
    text-decoration: none;
    &:hover {
      color: red;
    }
  }
`;

const ProductCart = () => {
  return (
    <Container>
      <Title>Keep Shopping for</Title>
      <Wrapper>
        <Details>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Jupiter_2023/PCQC/Revised1/Low_anushka._SY116_CB577519522_.jpg" />
          <Info>Up to 80% off | watches & smart watches</Info>
        </Details>

        <Details>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/Jupiter/QCandCC/PCQCRevised/Lamps_Diyas_and_Urlis-2_186x116._SY116_CB575816590_.jpg" />
          <Info>Up to 80% off</Info>
        </Details>

        <Details>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/Brands_days/QC_PC_186x116_3._SY116_CB576485323_.jpg" />
          <Info>Up to 80% off</Info>
        </Details>

        <Details>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Jup23/03-AC-1x._SY116_CB577612800_.jpg" />
          <Info>Up to 80% off</Info>
        </Details>
      </Wrapper>

      <Bottom>
        <Link to={"/"}>See More</Link>
      </Bottom>
    </Container>
  );
};

export default ProductCart;
