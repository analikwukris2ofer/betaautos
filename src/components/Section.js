import React from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { StylesProvider } from "@material-ui/core";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // background-image: url("/images/car1.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;
const KeyboardArrow = styled(KeyboardArrowDownIcon)`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;

  @keyframes animateDown {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(5px);
    }
    60% {
      transform: translateY(3px);
    }
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  return (
    <StylesProvider injectFirst>
      <Wrap bgImage={backgroundImg}>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>

          <KeyboardArrow />
        </Buttons>
      </Wrap>
    </StylesProvider>
  );
};

export default Section;