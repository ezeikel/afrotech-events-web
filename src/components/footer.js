import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: #000000;
  color: #9B9B9B;
  padding: 32px;
  font-size: 14px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ProjectDetails = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  line-height: 24px;
  a {
    color: #9B9B9B;
  }
`;

const CreatedBy = styled.span`
  font-size: 16px;
  color: #FFFFFF;
  margin-bottom: 8px;
  span {
    a {
      color: #FF5B55;
      font-weight: bold;
    }
  }
`;

const Copyright = styled.section`
  display: flex;
  flex-direction: column;
  line-height: 21px;
`;

const WithLove = styled.span`
  span {
    &:first-of-type {
      color: #FF5B55;
    }
    &:nth-of-type(2) {
      color: #FFFFFF;
    }
  }
`;

const Footer = () => (
  <Wrapper>
    <ProjectDetails>
      <CreatedBy>Created by <span><a href="https://twitter.com/ezeikel_">Ezeikel</a></span>.</CreatedBy>
      <span>Inspired by:</span>
      <span><a href="https://github.com/helloayo/AfroTech-Events">https://github.com/helloayo/AfroTech-Events</a></span>
    </ProjectDetails>
    <Copyright>
      <WithLove>Made with <span>♡</span> in <span>South London</span></WithLove>
      <span>&copy; {new Date().getFullYear()}. All rights reserved.</span>
    </Copyright>
  </Wrapper>
);

export default Footer
