import React from "react";
import styled from "styled-components";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  font-size: 1vmax;
`;

const LeftSide = styled.div`
  height: 100%;
  width: 25%;
`;

const Top = styled.div`
  height: 8vh;
  width: 100%;
  background-color: rgb(35, 47, 62);
  display: flex;
  align-items: center;
  padding: 0 2vmax;
  font-weight: 700;
  gap: 0.5vmax;
  font-size: 1.2vmax;

  svg {
    font-size: 2vmax;
  }
`;

const Hr = styled.div`
  border-bottom: 1px solid rgb(196, 196, 196);
  width: 100%;
  margin: 0.5vmax 0;
`;

const ListContainer = styled.div`
  height: 92vh;
  width: 100%;
  background-color: #fefefe;
  color: rgb(0, 0, 0);
  overflow-y: scroll;
  padding: 0.5vmax 0;
`;

const ListHead = styled.div`
  font-size: 1.3vmax;
  font-weight: 600;
  padding: 0.5vmax 2vmax;
`;

const ListItem = styled.div`
  padding: 0.5vmax 2vmax;
  margin: 0.5vmax 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: rgb(242, 242, 242);
  }

  svg {
    font-size: 1vmax;
  }
`;

const RightSide = styled.div`
  height: 100%;
  width: 75%;
  background-color: rgba(0, 0, 0, 0.8);

  svg {
    font-size: 2vmax;
    margin: 1vmax;
    cursor: pointer;
  }
`;
const Sidebar = ({ handleCloseSidebar }) => {
  return (
    <Container>
      <LeftSide>
        <Top>
          <AccountCircleIcon />
          Hello, Sign in
        </Top>
        <ListContainer>
          <ListHead>Trending</ListHead>
          <ListItem>Best Sellers</ListItem>
          <ListItem>New Releases</ListItem>
          <ListItem>Movers and Shakes</ListItem>

          <Hr />
          <ListHead>Digital Content And Devices</ListHead>
          <ListItem>Amazon minTV - free entertainment </ListItem>
          <ListItem>
            Echo and Alexa <ArrowForwardIosIcon />
          </ListItem>
          <ListItem>Fire TV</ListItem>
          <ListItem>
            Amazon Prime Video <ArrowForwardIosIcon />
          </ListItem>
          <ListItem>
            Amazon Prime Music <ArrowForwardIosIcon />
          </ListItem>

          <Hr />
          <ListHead>Shop By Category</ListHead>
          <ListItem>
            Mobiles & Computers <ArrowForwardIosIcon />
          </ListItem>
          <ListItem>
            TV, Applaiances, Electronics
            <ArrowForwardIosIcon />
          </ListItem>
          <ListItem>
            Men's Fashion
            <ArrowForwardIosIcon />
          </ListItem>
          <ListItem>
            Women's Fashion
            <ArrowForwardIosIcon />
          </ListItem>

          <Hr />
          <ListHead>Programs & Features</ListHead>
          <ListItem>Amazon Launhpad</ListItem>
          <ListItem>Flight Tickets</ListItem>
          <ListItem>Handlooms and Handcrafts</ListItem>

          <Hr />
          <ListHead>Help & Settings</ListHead>
          <ListItem>Your Account</ListItem>
          <ListItem>Customer Service</ListItem>
          <ListItem>Sign Out</ListItem>
        </ListContainer>
      </LeftSide>

      <RightSide onClick={handleCloseSidebar}>
        <CloseOutlinedIcon />
      </RightSide>
    </Container>
  );
};

export default Sidebar;
