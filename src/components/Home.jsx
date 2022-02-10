import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";

function Home() {
  return (
    <Container>
      <ImageSlider />
    </Container>
  );
}

export default Home;

///////////////////////////////////////////////////////////////////////////
//////  STYLED COMPONENTS

const Container = styled.main`
  // 100% minus the header height
  min-height: calc(100vh - 70px);
  padding: 0 calc() (3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  // Background Image - adds div before the container
  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0; // 0px from top etc....
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
