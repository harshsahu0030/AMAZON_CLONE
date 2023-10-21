import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SliderItem from "./SliderItem";

const Container = styled.div`
  height: 100%;
  width: 100%;
  font-size: 1vmax;
  padding: 1vmax;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 1vmax;
  padding: 0.5vmax 0;

  a {
    text-decoration: none;
    color: #0071a5;

    &:hover {
      color: red;
      text-decoration: underline;
    }
  }
`;

const Head = styled.div`
  font-size: 1.5vmax;
  font-weight: 600;
`;

const LinkItem = styled.div`
  font-size: 1vmax;
`;

const Slider = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  gap: 0.5vmax;
`;

const Arrow = styled.div`
  height: 100px;
  padding: 0 0.5vmax;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  left: ${(props) => props.direction === "left" && "0"};
  right: ${(props) => props.direction === "right" && "0"};
  z-index: 1;
  transition: all 200ms linear;
  border: 5px solid transparent;
  background-color: white;
  border: 1px solid #c2c2c2;

  svg {
    transition: all 200ms linear;
  }

  &:active {
    border: 1px solid #959494;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s linear;
  transform: translateX(${(props) => props.sliderIndex * -80}vw);
`;

const SliderItems = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 3 - 1);
    } else {
      setSliderIndex(sliderIndex < 3 - 1 ? sliderIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Top>
        <Head>Blockbuster deals</Head>
        <Link to={"/"}>
          <LinkItem>See all deals</LinkItem>
        </Link>
      </Top>
      <Slider>
        <Arrow direction="left" onClick={handleClick}>
          <ArrowBackIosIcon />
        </Arrow>
        <Wrapper sliderIndex={sliderIndex}>
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
        </Wrapper>
        <Arrow direction="right" onClick={handleClick}>
          <ArrowForwardIosIcon />
        </Arrow>
      </Slider>
    </Container>
  );
};

export default SliderItems;
