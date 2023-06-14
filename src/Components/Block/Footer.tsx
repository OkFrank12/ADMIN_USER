import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>Footer</Main>
      </Container>
    </div>
  );
};

export default Footer;

const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 98px;
  color: white;
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

const Main = styled.div`
  margin: 0 20px;
`;
