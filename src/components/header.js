import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  z-index: 1;
  display: flex;
  align-items: center;
  padding: var(--spacing-medium) var(--spacing-large);
  height: var(--header-height);
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  @media (min-width: 768px) {
    padding: var(--spacing-medium) var(--spacing-large);
  }
`;

const Logo = styled.span`
  font-size: 28px;
  line-height: 42px;
  font-weight: 800;
  text-align: center;
  color: var(--color-white);
  width: 100%;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Header = () => (
  <Wrapper>
    <Logo>Afrotech Events</Logo>
  </Wrapper>
);

export default Header;
