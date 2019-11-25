import React from "react";
import styled from "styled-components";
import EventForm from "./eventForm";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 32px;
  @media (min-width: 768px) {
    padding: 48px;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
  margin: 0 0 64px 0;
  text-align: center;
  @media (min-width: 768px) {
    margin: 0 0 64px 0;
    line-height: inherit;
  }
`;

const Copy = styled.p`
  font-size: 18px;
  line-height: 24px;
  text-align: center;
`;

const SubmitEvent = () => (
  <Wrapper>
    <Title>Submit Event</Title>
    <Copy>You can submit an event using the form below or by making a pull request to the GitHub repo for this site. Just follow the instructions on how to contribute.</Copy>
    <EventForm />
  </Wrapper>
);

export default SubmitEvent;
