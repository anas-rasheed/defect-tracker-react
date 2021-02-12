import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  box-shadow: 0px 6px 20px rgba(157, 160, 252, 1);
  border-radius: 2rem;
  position: relative;
  justify-content: space-evenly;
`;

const StyledBrand = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  left: 20px;
  > a {
    color: #ffffff;
    text-decoration: none;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 2rem;
  }
`;

const StyledNavLinks = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  right: 10px;
  > a {
    color: #ffffff;
    text-align: center;
    margin: 0 5px;
    width: 50px;
    text-decoration: none;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 2rem;
  }
`;

const Header = () => {
  return (
    <>
      <StyledNavbar>
        <StyledBrand>
          <Link to='/postingRouter'>Brand</Link>
        </StyledBrand>
        <StyledNavLinks>
          <Link to='/'>First</Link>
          <Link to='/'>Second</Link>
          <Link to='/'>Third</Link>
          <Link to='/'>Fourth</Link>
        </StyledNavLinks>
      </StyledNavbar>
    </>
  );
};

export default Header;
