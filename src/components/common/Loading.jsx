import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: #000 transparent #000 transparent;
    animation-name: ${LoadingAnimation};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
  }
`;

const Loading = () => {
  return <LoadingSpinner />;
};

export default Loading;

const SquareAnimation = keyframes`
0% { 
  transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
} 50% { 
  transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
} 100% { 
  transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
}
`;

const StaticSquare = styled.div`
  width: 40px;
  height: 40px;
  background-color: #333;
`;

const SpinnerLoading = styled.div`
  width: 40px;
  height: 40px;
  background-color: #333;
  animation-name: ${SquareAnimation};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

export const SquareLoading = ({ isAnimate }) => {
  return <>{isAnimate ? <SpinnerLoading /> : <StaticSquare />}</>;
};
