import React from "react";
import styled from "styled-components";
import Events from "./events";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #FF5E5B;
  padding: 32px;
  @media (min-width: 768px) {
    padding: 48px;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
  margin: 0 0 64px 0;
  color: var(--color-white);
  text-align: center;
  @media (min-width: 768px) {
    margin: 0 0 64px 0;
    line-height: inherit;
  }
`;

const StyledButton = styled.button`
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  border-radius: 4px;
  color: #FF5E5B;
  padding: 16px;
  width: 100%;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
  margin: 0 0 32px 0;
  @media (min-width: 768px) {
    position: absolute;
    top: 48px;
    right: 48px;
    width: auto;
  }
`;

const Searchbox = styled.input`
  padding: 16px;
  font-size: 20px;
  border-radius: 4px;
  border: none;
  box-shadow: var(--box-shadow);
  width: 100%;
  margin-bottom: 32px;
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #BBBBBB;
    line-height: inherit;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: #BBBBBB;
    line-height: inherit;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: #BBBBBB;
    line-height: inherit;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: #BBBBBB;
    line-height: inherit;
  }
  @media (min-width: 768px) {
    margin-bottom: 48px;
    &[type="text"] {
      width: 75%;
    }
  }
`;

const SearchEvent = () => (
  <Wrapper id="searchEvent">
    <Title>Events</Title>
    <StyledButton>Submit Event</StyledButton>
    <Searchbox type="text" placeholder="Search" />
    <Events />
  </Wrapper>
);

export default SearchEvent;
