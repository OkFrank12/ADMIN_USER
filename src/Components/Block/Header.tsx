import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>Logo</Logo>
          <NavHolder>
            <Nav>About</Nav>
            <Nav>Contact</Nav>
            <Nav>Features</Nav>
          </NavHolder>
          <Icons size={40} />
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
  color: white;
`;

const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  margin: 0 20px;
`;

const NavHolder = styled.div`
  display: flex;

  @media screen and (max-width: 670px) {
    display: none;
  }
`;

const Nav = styled.div`
  margin: 0 20px;
`;

const Icons = styled(AiOutlineMenu)`
  display: none;

  @media screen and (max-width: 670px) {
    display: block;
  }
`;
