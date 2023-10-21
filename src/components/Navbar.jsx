import React, { useRef } from "react";
import styled from "styled-components";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Sidebar from "./Sidebar";

const Container = styled.div`
  height: 6vh;
  width: 100%;
  background-color: rgb(35, 47, 62);
  display: flex;
  align-items: center;
  color: #fefefe;
  font-size: 1vmax;
  white-space: nowrap;
`;
const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.5vmax;
  gap: 0.5vmax;
`;

const LinkContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  padding: 0 0.3vmax;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9vmax;

  &:hover {
    border: 1px solid #fefefe;
  }
`;

const SideBar = styled.div`
  position: absolute;
  height: 100vh;
  display: flex;
  width: 0;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  z-index: -1;
  position: fixed;
`;

const Navbar = () => {
  const ref = useRef();

  const handleOpenSidebar = () => {
    ref.current.style.width = "100%";
    ref.current.style.zIndex = "5";
  };

  const handleCloseSidebar = () => {
    ref.current.style.width = "0";
    ref.current.style.zIndex = "-1";
  };
  return (
    <Container>
      <Wrapper>
        <LinkContainer onClick={handleOpenSidebar}>
          <MenuOutlinedIcon />
          All
        </LinkContainer>
        <LinkContainer>Amazon miniTV</LinkContainer>
        <LinkContainer>Sell</LinkContainer>
        <LinkContainer>Today's Deal</LinkContainer>
        <LinkContainer>Best Sellers</LinkContainer>
        <LinkContainer>Mobiles</LinkContainer>
        <LinkContainer>Electronics</LinkContainer>
        <LinkContainer>Customer Service</LinkContainer>
        <LinkContainer>
          Prime <ArrowDropDownOutlinedIcon />
        </LinkContainer>
        <LinkContainer>New Realeases</LinkContainer>
        <LinkContainer>Gift Ideas</LinkContainer>
        <LinkContainer>Home & Kitchin</LinkContainer>
      </Wrapper>

      <SideBar ref={ref}>
        <Sidebar handleCloseSidebar={handleCloseSidebar} />
      </SideBar>
    </Container>
  );
};

export default Navbar;
