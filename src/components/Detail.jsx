import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt=""
        />
      </Background>
      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="Play Button" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="Trailer Button" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="Group Watch Button" />
        </GroupWatchButton>
      </Controls>
      <Subtitle>
        2018 &bull; 7m &bull; Family, Fantasy, Kids, Animation
      </Subtitle>
      <Description>
        A Chinese mom who's sad when her grown son leaves home gets another
        chance at motherhood when one of her duplings springs to life. But she
        finds that nothing stays cute and small forever.
      </Description>
    </Container>
  );
}

export default Detail;

///////////////////////////////////////////////////////////////////////////
//////  STYLED COMPONENTS

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc() (3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    /* width: 100%;
    height: auto; */
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin-top: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-left: 50px;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  margin-left: 50px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  margin-left: 0px;
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  font-size: 30px;
  border-radius: 50px;
  background: rgba(0, 0, 0);
  border: 2px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  cursor: pointer;
`;

const GroupWatchButton = styled(AddButton)`
  display: flex;
  justify-content: center;
  background: rgb(0, 0, 0);
`;

const Subtitle = styled.div`
  margin-left: 50px;
  margin-top: 26px;
  min-height: 20px;
  font-size: 15px;
  color: rgb(249, 249, 249);
`;

const Description = styled.div`
  margin-left: 50px;
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;
