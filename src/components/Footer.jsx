import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 35vh;
  width: 100%;
  background-color: rgb(19, 26, 34);
  padding: 2vmax 0;
  display: flex;
  flex-direction: column;
  gap: 1vmax;
  color: #ebebeb;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #fefefe;
    }
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 70%;
  margin: auto;
  padding: 1vmax;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 1vmax;
  overflow: hidden;
`;

const Info = styled.div`
  font-size: 0.8vmax;
  width: 9vmax;
  line-height: 1.2;
`;

const LineOne = styled.div``;

const LineTwo = styled.div`
  color: rgb(153, 153, 153);
`;

const CopyRights = styled.div`
  font-size: 0.8vmax;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  gap: 1vmax;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Info>
            <LineOne>AbeBooks</LineOne>
            <LineTwo>Books, art & collectibles</LineTwo>
          </Info>
        </Link>

        <Link to="/">
          <Info>
            <LineOne>Amazon Web Services </LineOne>
            <LineTwo>Scalable Cloud Computing Services</LineTwo>
          </Info>
        </Link>

        <Link to="/">
          <Info>
            <LineOne>Audible</LineOne>
            <LineTwo>Download Audio Books</LineTwo>
          </Info>
        </Link>

        <Link to="/">
          <Info>
            <LineOne>IMDb</LineOne>
            <LineTwo>Movies, TV & Celebrities</LineTwo>
          </Info>
        </Link>

        <Link to="/">
          <Info>
            <LineOne>Shopbop</LineOne>
            <LineTwo>Designer Fashion Brands</LineTwo>
          </Info>
        </Link>

        <Link to="/">
          <Info>
            <LineOne>Amazon Business</LineOne>
            <LineTwo>Everything For Your Business</LineTwo>
          </Info>
        </Link>

        <Link to="/">
          <Info>
            <LineOne>Prime Now</LineOne>
            <LineTwo>2-Hour Delivery on Everyday Items</LineTwo>
          </Info>
        </Link>

        <Link to="/">
          <Info>
            <LineOne>Amazon Prime Music</LineOne>
            <LineTwo>
              100 million songs, ad-free Over 15 million podcast episodes
            </LineTwo>
          </Info>
        </Link>
      </Wrapper>
      <CopyRights>
        <Details>
          <Link to="/">Conditions of Use & Sale</Link>
          <Link to="/">Privacy Notice</Link>
          <Link to="/">Interest-Based Ads</Link>
        </Details>
        © 1996-2023, Amazon.com, Inc. or its affiliates
      </CopyRights>
    </Container>
  );
};

export default Footer;
