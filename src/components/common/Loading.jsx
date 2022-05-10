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
