import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: #000000;
  color: #9B9B9B;
  padding: 32px;
`;

const Footer = () => (
  <Wrapper>
    <section>
      <span>Created by Ezeikel</span>
      <span>Inspired by:</span>
      <span><a href="https://github.com/helloayo/AfroTech-Events">https://github.com/helloayo/AfroTech-Events</a></span>
    </section>
    <section>
      <span>Made with ♡ in South London</span>
      <span>© 2019. All rights reserved.</span>
    </section>
  </Wrapper>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
