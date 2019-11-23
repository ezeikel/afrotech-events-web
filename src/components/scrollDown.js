import React from "react";
import styled from "styled-components";
import { scrollDown } from "../GlobalStyle";

const Mouse = styled.div`
  width: 40px;
  height: 60px;
  border-radius: 20px;
  border: 3px solid var(--color-white);
  position: relative;
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
  }
  &:before {
    height: 30px;
    width: 4px;
    top: 10px;
    left: calc(50% - 2px);
    background: rgba(255, 255, 255, 0.55);
    border-radius: 2px;
  }
  &:after {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 15px;
    left: calc(50% - 5px);
    background: var(--color-white);
    -webkit-animation: m-0-ball 1.2s ease-in-out infinite;
    animation: ${scrollDown} 1.2s ease-in-out infinite;
  }
`;

const ScrollDown = ({ className }) => (
  <Mouse className={className} />
);

export default ScrollDown;