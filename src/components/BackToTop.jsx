import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 8vh;
  width: 100%;
  background-color: rgb(55, 71, 90);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ebebeb;
  font-size: 0.8vmax;
  cursor: pointer;

  &:hover {
    background-color: rgba(55, 71, 90, 0.927);
  }
`;

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return <Container onClick={scrollToTop}>Back To Top</Container>;
};

export default BackToTop;
