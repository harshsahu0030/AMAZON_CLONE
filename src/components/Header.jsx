import React, { useRef } from "react";
import styled from "styled-components";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 8vh;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgb(19, 25, 33);
  color: #fefefe;
  font-size: 1vmax;
  white-space: nowrap;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Wrapper = styled.div`
  height: 75%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.5vmax;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 0.5vmax;
`;

const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  padding: 0 0.3vmax;

  &:hover {
    border: 1px solid #fefefe;
  }
`;

const Image = styled.img`
  height: 100%;
`;

const LinkContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  padding: 0 0.3vmax;
  gap: 0.3vmax;
  cursor: pointer;
  position: relative;

  &:hover {
    border: 1px solid #fefefe;
  }
`;

const LinkDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.1;
  height: 100%;
`;

const LinkDescLineOne = styled.p`
  font-size: 0.8vmax;
  color: #dfdede;
`;

const LinkDescLineTwo = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const CenterSide = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 0.5vmax;
`;

const Button = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5vmax;
  border: 3px solid transparent;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  background-color: ${(props) =>
    props.bgColor === "search" ? "rgb(254,189,105)" : "rgb(230,230,230)"};

  &:hover {
    background-color: ${(props) =>
      props.bgColor === "search" ? "rgb(255, 164, 45)" : "rgb(199, 199, 199)"};
  }

  &:focus {
    border: 3px solid
      ${(props) =>
        props.bgColor === "search" ? "transparent" : "rgb(255, 164, 45)"};
    background-color: ${(props) =>
      props.bgColor === "search" ? "rgb(255, 164, 45)" : "rgb(199, 199, 199)"};
  }
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  border: 3px solid transparent;
  padding: 0 0.5vmax;

  &:focus {
    border: 3px solid rgb(255, 164, 45);
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 0.5vmax;
`;

const LangList = styled.div`
  height: fit-content;
  width: 15vw;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.5vmax;
  padding: 1vmax;
  color: rgb(0, 0, 0);
  background-color: #ececec;
  top: 3vmax;
  left: 0;
  display: none;
  cursor: default;
  z-index: 2;
`;

const LangItem = styled.div`
  display: flex;
  gap: 0.5vmax;

  &:hover {
    color: green;
    cursor: pointer;
  }
`;

const InputLang = styled.input``;

const Header = () => {
  const ref = useRef();

  const handleLangList = () => {
    ref.current.style.display = "flex";
  };

  const handleLeaveLangList = () => {
    ref.current.style.display = "none";
  };
  return (
    <Container>
      <Wrapper>
        {/* LEFT */}
        <LeftSide>
          <Logo>
            <Image
              src={
                "https://i.pinimg.com/564x/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.jpg"
              }
            />
            .in
          </Logo>
          <LinkContainer>
            <PlaceOutlinedIcon />
            <LinkDesc>
              <LinkDescLineOne>Hello</LinkDescLineOne>
              <LinkDescLineTwo>Select your address</LinkDescLineTwo>
            </LinkDesc>
          </LinkContainer>
        </LeftSide>

        {/* CENTER */}
        <CenterSide>
          <Button>
            All <ArrowDropDownOutlinedIcon />
          </Button>
          <Input type="text" placeholder="Search Amazon.in" />
          <Button bgColor="search">
            <SearchOutlinedIcon />
          </Button>
        </CenterSide>

        {/* RIGHT */}
        <RightSide>
          <LinkContainer
            onMouseOver={handleLangList}
            onMouseOutCapture={handleLeaveLangList}
          >
            <>
              <FlagCircleIcon />
              EN <ArrowDropDownOutlinedIcon />
            </>
            <LangList ref={ref}>
              <LangItem>
                <InputLang name="language" type="radio" />
                English
              </LangItem>
              <LangItem>
                <InputLang name="language" type="radio" />
                Hindi
              </LangItem>
              <LangItem>
                <InputLang name="language" type="radio" />
                Marathi
              </LangItem>
              <LangItem>
                <InputLang name="language" type="radio" />
                Tamil
              </LangItem>
              <LangItem>
                <InputLang name="language" type="radio" />
                Bengali
              </LangItem>
            </LangList>
          </LinkContainer>
          <LinkContainer>
            <LinkDesc>
              <LinkDescLineOne>Hello, Sign in</LinkDescLineOne>
              <LinkDescLineTwo>
                Account & Lists <ArrowDropDownOutlinedIcon />
              </LinkDescLineTwo>
            </LinkDesc>
          </LinkContainer>
          <LinkContainer>
            <LinkDesc>
              <LinkDescLineOne>Returns</LinkDescLineOne>
              <LinkDescLineTwo>& Orders</LinkDescLineTwo>
            </LinkDesc>
          </LinkContainer>
          <LinkContainer>
            <ShoppingCartOutlinedIcon />
            <LinkDesc>
              <LinkDescLineTwo>Cart</LinkDescLineTwo>
            </LinkDesc>
          </LinkContainer>
        </RightSide>
      </Wrapper>
    </Container>
  );
};

export default Header;
