import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import Hero from "../components/hero";
import SearchEvent from "../components/searchEvent";
import SubmitEvent from "../components/submitEvent";

const Wrapper = styled.div`
  display: grid;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 32px;
  @media (min-width: 768px) {
    p {
      margin: 0 0 32px 0;
    }
    padding: 48px;
    text-align: left;
    flex-direction: row;
  }
`;

const Love = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 32px;
  span {
    color: #FF5E5B;
  }
  p:first-of-type {
    line-height: 38px;
  }
  p:last-of-type {
    font-weight: 800;
  }
  @media (min-width: 768px) {
    flex: 0 0 40%;
    margin-right: 128px;
    p:first-of-type {
      font-size: 32px;
      line-height: 42px;
  }
    p:last-of-type {
      line-height: 24px;
    }
  }
`;

const Disclaimer = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 24px;
  span {
    font-weight: bold;
  }
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GlobalStyle />
    <Wrapper>
      <Hero />
      <Section>
        <Love>
          <p>Three days of knowledge sharing and community with people who look like us </p>
          <p>We <span>love</span> Afrotech.</p>
        </Love>
        <Disclaimer>
          <p>We don’t want you to miss a beat and want you to enjoy the most out of the Afrotech experience so check back regularly to see what’s happening where and when. Also, If you  know of anything that is missing either use the form to submit a new event or make a pull request on Github if that’s more your bag.</p>
          <p><span>Disclaimer:</span> We do not work for Afrotech so can’t answer any questions you may have regarding the conference itself but please use this site to check for all things Afrotech events.</p>
        </Disclaimer>
      </Section>
      <SearchEvent />
      <SubmitEvent />
    </Wrapper>
  </Layout>
);

export default IndexPage;
