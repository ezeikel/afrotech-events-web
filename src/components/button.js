import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  background-color: #FF5E5B;
  padding: 32px;
  @media (min-width: 768px) {
  }
`;

const Title = styled.h2`
  font-size: 48px;
  line-height: 24px;
  margin: 0 0 32px 0;
  color: var(--color-white);
  text-align: center;
  @media (min-width: 768px) {
  }
`;

const Header = () => (
  <Wrapper>
    <Title>Events</Title>
  </Wrapper>
);

export default Header;
