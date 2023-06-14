import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img1 from "../../Assets/appliances.jpg";
import img2 from "../../Assets/beauty_shop.jpg";
import img3 from "../../Assets/flash_sales.png";
import img4 from "../../Assets/freezers.png";
import img5 from "../../Assets/infinix.png";
import img6 from "../../Assets/jumia_opay.png";
import img7 from "../../Assets/large_items.png";
import img8 from "../../Assets/official_store.png";
import img9 from "../../Assets/for_free.png";
import img10 from "../../Assets/shopping.png";


const Hero = () => {
  const [counter, setCounter] = useState<number>(0);

  const onAdd = () => {
    setCounter(counter + 1);
  };

  const onRemove = () => {
    setCounter(counter - 1);
  };

  const [toggle, setToggle] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const imageArray: string[] = [img1, img2, img3, img4, img5, img6, img7, img8];

  const [image, setImage] = useState<string>(img1);

  useEffect(() => {
    setInterval(() => {
      setCounter((el) => {
        return el + 1;
      });
    }, 5000);
  }, []);

  return (
    <div>
      <Container>
        <SideNav>
          <Nav>Super Market</Nav>
          <Nav>Health & Beauty</Nav>
          <Nav>Home & Office</Nav>
          <Nav>Phones & Tablet</Nav>
          <Nav>Computing</Nav>
          <Nav>Electronics</Nav>
          <Nav>Fashion</Nav>
          <Nav>Baby Products</Nav>
          <Nav>Gaming</Nav>
          <Nav>Sporting Goods</Nav>
          <Nav>Automobile</Nav>
          <Nav>Other Categories</Nav>
        </SideNav>
        <SideNav1>
          <Nav1>Super Market</Nav1>
          <Nav1>Health & Beauty</Nav1>
          <Nav1>Home & Office</Nav1>
          <Nav1>Phones & Tablet</Nav1>
          <NavOrange onClick={onToggle}>
            {toggle ? (
              <SideNav3>
                <Nav>Electronics</Nav>
                <Nav>Fashion</Nav>
                <Nav>Baby Products</Nav>
                <Nav>Gaming</Nav>
                <Nav>Sporting Goods</Nav>
                <Nav>Automobile</Nav>
                <Nav>Other Categories</Nav>
              </SideNav3>
            ) : (
              <div>ENTER...</div>
            )}
          </NavOrange>
        </SideNav1>
        <Div onClick={onAdd}>+</Div>
        <Img
          src={imageArray[counter % imageArray.length]}
          width={700}
          height={400}
          object-fit="cover"
        />
        <Div2 onClick={onRemove}>-</Div2>
        <Wrapper>
          <Box src={img9}></Box>
          <Box src={img10}></Box>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Img = styled.img`
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid silver;
  margin-left: 5px;

  @media screen and (max-width: 1340px) {
    margin-right: 10px;
  }

  @media screen and (max-width: 1200px) {
    width: 900px;
  }
  @media screen and (max-width: 1000px) {
    width: 650px;
  }

  @media screen and (max-width: 670px){
    width: 600px;
}
  @media screen and (max-width: 620px){
    width: 500px;
    height: 300px;
}
  @media screen and (max-width: 500px){
    width: 350px;
    height: 180px;
}

@media screen and (max-width: 365px){
    display: none;
}
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 870px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Div = styled.div`
  font-size: 30px;
  border-radius: 50%;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #f0eeee;
  color: grey;
  margin-left: 3px;

  @media screen and (max-width: 1340px) {
    display: none;
  }
`;

const Div2 = styled.div`
  font-size: 30px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0eeee;
  color: grey;
  @media screen and (max-width: 1340px) {
    display: none;
  }
`;

const Nav = styled.div`
  transition: all 350ms;
  :hover {
    color: darkorange;
    cursor: pointer;
  }
`;

const SideNav = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 10px;
  width: 230px;
  padding: 10px 10px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid darkorange;
  background-color: #fffffffa;

  @media screen and (max-width: 870px) {
    display: none;
  }

`;

const Box = styled.img`
  width: 220px;
  height: 180px;
  background-color: whitesmoke;
  border-radius: 10px;
  margin-top: 5px;
  border: 1px solid silver;
`;

const Wrapper = styled.div`
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 380px;
  width: 230px;
  align-items: center;

  @media screen and (max-width: 1340px) {
    width: 250px;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 365px){
    display: flex;
}
`;

const SideNav1 = styled.div`
  display: none;
  @media screen and (max-width: 870px) {
    display: flex;
    width: 650px;
    justify-content: center;
    align-items: center;
    height: 50px;
    border: 1px solid darkorange;
    border-radius: 10px;
  }

  @media screen and (max-width: 670px){
    width: 600px;
}
  @media screen and (max-width: 620px){
    width: 500px;
}

@media screen and (max-width: 500px){
    width: 350px;
}

@media screen and (max-width: 365px){
    display: none;
}
`;

const Nav1 = styled.div`
  margin: 0 5px;
  transition: all 350ms;

  :hover {
    color: darkorange;
    cursor: pointer;
  }

  @media screen and (max-width: 620px){
    font-size: 15px;
}

@media screen and (max-width: 500px){
    font-size: 8px;
}
`;

const NavOrange = styled.div`
  margin: 0 5px;
  color: darkorange;
  z-index: 10;
  cursor: pointer;
`;

const SideNav3 = styled.div`
  margin-top: 250px;
  border-radius: 10px;
  width: 150px;
  padding: 2px 2px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid darkorange;
  background-color: #fffffffa;
`;
