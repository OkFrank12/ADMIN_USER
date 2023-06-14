import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import styled from "styled-components";

const UserLayout = () => {
  return (
    <div>
      <Container>
        <Header />
        <Main>
          <Outlet />
          <Footer />
        </Main>
      </Container>
    </div>
  );
};

export default UserLayout;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Main = styled.div`
  flex: 1;
`;
