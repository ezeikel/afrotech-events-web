import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  height: 500px;
  background-image:
    linear-gradient(
      to right,
      #15CDA8, #099A97
    );
`;

const Hero = () => (
  <Wrapper>
    <span>Novembe</span>
    <span>12th - 15th</span>
    <span>Oakland, CA</span>
  </Wrapper>
);

export default Hero;
