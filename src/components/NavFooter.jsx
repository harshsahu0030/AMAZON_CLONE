import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 70vh;
  width: 100%;
  background-color: rgb(35, 47, 62);
  padding: 2vmax 0;
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
  color: #ebebeb;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vmax;
`;

const Head = styled.div`
  font-weight: 600;
  margin-bottom: 0.5vmax;
`;

const Item = styled.div`
  font-size: 0.9vmax;
  color: rgb(223, 223, 223);

  &:hover {
    text-decoration: underline;
  }
`;

const Hr = styled.div`
  border-bottom: 1px solid #4d4d4d;
  width: 100%;
  padding: 1vmax;
`;

const Bottom = styled.div`
  height: 30vh;
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1vmax;
  gap: 1.5vmax;
`;

const Upper = styled.div``;

const Image = styled.img`
  height: 50px;
`;

const Lower = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5vmax 1vmax;
  font-size: 0.8vmax;
  flex-wrap: wrap;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;

const NavFooter = () => {
  const countries = [
    "Australia",
    "Brazil",
    "Canada",
    "China",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "Mexico",
    "Netherlands",
    "Poland",
    "Singapore",
    "Spain",
    "Turkey",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
  ];
  return (
    <Container>
      <Wrapper>
        <LinkContainer>
          <Head>Get to Know Us</Head>

          <Link to="/">
            <Item>About Us</Item>
          </Link>
          <Link to="/">
            <Item>Press Releases</Item>
          </Link>
          <Link to="/">
            <Item>Careers</Item>
          </Link>
          <Link to="/">
            <Item>Amazon Science</Item>
          </Link>
        </LinkContainer>
        <LinkContainer>
          <Head>Contact Us</Head>

          <Link to="/">
            <Item>Facebook</Item>
          </Link>
          <Link to="/">
            <Item>Twitter</Item>
          </Link>

          <Link to="/">
            <Item>Instagram</Item>
          </Link>
        </LinkContainer>
        <LinkContainer>
          <Head>Make Money With Us</Head>

          <Link to="/">
            <Item>Sell on Amazon</Item>
          </Link>
          <Link to="/">
            <Item>Sell under Amazon Accelerator</Item>
          </Link>
          <Link to="/">
            <Item>Protect and Build Your Brand</Item>
          </Link>
          <Link to="/">
            <Item>Amazon Global Selling</Item>
          </Link>
          <Link to="/">
            <Item>Become an Affiliate</Item>
          </Link>
          <Link to="/">
            <Item>Fulfilment by Amazon</Item>
          </Link>
          <Link to="/">
            <Item>Advertise Your Products</Item>
          </Link>
          <Link to="/">
            <Item>Amazon Pay on Merchants</Item>
          </Link>
        </LinkContainer>
        <LinkContainer>
          <Head>Let Us Help You</Head>

          <Link to="/">
            <Item>COVID-19 and Amazon</Item>
          </Link>

          <Link to="/">
            <Item>Your Account</Item>
          </Link>
          <Link to="/">
            <Item>Returns Centre</Item>
          </Link>
          <Link to="/">
            <Item>100% Purchase Protection</Item>
          </Link>
          <Link to="/">
            <Item>Amazon App Download</Item>
          </Link>
          <Link to="/">
            <Item>Help</Item>
          </Link>
        </LinkContainer>
      </Wrapper>
      <Hr />
      <Bottom>
        <Upper>
          <Link to="/">
            <Image
              src={
                "https://i.pinimg.com/564x/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.jpg"
              }
            />
          </Link>
        </Upper>
        <Lower>
          {countries &&
            countries.map((item, index) => (
              <Link to="/">
                <Item>{item}</Item>
              </Link>
            ))}
        </Lower>
      </Bottom>
    </Container>
  );
};

export default NavFooter;
