import React from "react";
import Hero from "../../Components/Static/Hero";
import styled from "styled-components";

const HomeScreen = () => {
  return (
    <div>
      <Container>
        <Hero />
      </Container>
    </div>
  );
};

export default HomeScreen;

const Container = styled.div``;
