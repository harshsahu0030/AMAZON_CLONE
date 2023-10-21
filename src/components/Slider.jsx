import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-bottom: -40vh;
`;

const Arrow = styled.div`
  width: 5vmax;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  margin: auto;
  cursor: pointer;
  left: ${(props) => props.direction === "left" && "0"};
  right: ${(props) => props.direction === "right" && "0"};
  opacity: 0.5;
  z-index: 1;
  transition: all 200ms linear;
  border: 5px solid transparent;

  svg {
    transition: all 200ms linear;
  }

  &:active {
    border: 5px solid white;
  }

  &:hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s linear;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  -webkit-mask-image: linear-gradient(
    to Top,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
  mask-image: linear-gradient(
    to Top,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
  z-index: -1;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slideInfo = [
    {
      id: 1,
      bgurl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/KV_Hero_PC_Day-1_2X_EN._CB575892060_.jpg",
      url: "",
    },
    {
      id: 2,
      bgurl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Ayushi/DB/LG_Homepage_DesktopHeroTemplate_3000x1200_22June2023._CB575985618_.jpg",
      url: "",
    },
    {
      id: 3,
      bgurl: "https://m.media-amazon.com/images/I/81sR+PHfjdL._SX3000_.jpg",
      url: "",
    },
    {
      id: 4,
      bgurl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Jupiter23/Event/V4/Flight_Homepage_DesktopHeroTemplate_3000x1200_22June2023-copy._CB575980692_.jpg",
      url: "",
    },
    {
      id: 5,
      bgurl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/Jupiter23/Mainevent/D2hero/PC/3000-X-1200-Pc-Gw-Hero-4._CB575730407_.jpg",
      url: "",
    },
  ];

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideInfo.length - 1);
    } else {
      setSlideIndex(slideIndex < slideInfo.length - 1 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={handleClick}>
        <ArrowBackIosIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideInfo &&
          slideInfo.map((item, index) => (
            <Slide>
              <Image src={item.bgurl}></Image>
            </Slide>
          ))}
      </Wrapper>
      <Arrow direction="right" onClick={handleClick}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
