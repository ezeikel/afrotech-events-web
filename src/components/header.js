import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg"

const Wrapper = styled.header`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-large);
  height: var(--header-height);
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 180px;
  @media (min-width: 768px) {
    justify-content: flex-start;
    height: 160px;
  }
`

const StyledLogo = styled.img`
  max-height: 100%;
`;

const Header = () => (
  <Wrapper>
    <StyledLogo src={Logo} alt="logo" />
  </Wrapper>
);

export default Header;
