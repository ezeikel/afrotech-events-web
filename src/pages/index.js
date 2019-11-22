import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

const Container = styled.div`
  background-color: tomato;
  h1 {
    color: white;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GlobalStyle />
    <Container>
      <h1>Hello World.</h1>
    </Container>
  </Layout>
);

export default IndexPage;
