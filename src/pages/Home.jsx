import React from "react";
import Slider from "../components/Slider";
import styled from "styled-components";
import ProductCart from "../components/Product Carts/ProductCart";
import SliderItems from "../components/Product Carts/SliderItems";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 0.5vmax;
  background-color: rgb(227, 230, 230);
`;

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 1vmax;
  overflow: hidden;
  padding: 2vmax 1.5vmax;
`;

const ItemsSlider = styled.div`
  height: fit-content;
  width: 100%;
  padding: 1vmax;
  background-color: #fefefe;
  padding: 1vmax;
`;

const Home = () => {
  return (
    <Container>
      <Slider />
      <Wrapper>
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </Wrapper>
      <Wrapper>
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </Wrapper>
      <ItemsSlider>
        <SliderItems />
      </ItemsSlider>
      <ItemsSlider>
        <SliderItems />
      </ItemsSlider>
      <Wrapper>
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </Wrapper>
      <ItemsSlider>
        <SliderItems />
      </ItemsSlider>
      <ItemsSlider>
        <SliderItems />
      </ItemsSlider>
      <Wrapper>
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </Wrapper>
      <Wrapper>
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </Wrapper>
      <ItemsSlider>
        <SliderItems />
      </ItemsSlider>
      <ItemsSlider>
        <SliderItems />
      </ItemsSlider>
    </Container>
  );
};

export default Home;
