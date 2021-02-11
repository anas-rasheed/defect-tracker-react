import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  background: linear-gradient(
    to right bottom,
    rgb(255, 255, 255, 0.7),
    rgb(255, 255, 255, 0.3)
  );
  backdrop-filter: blur(100rem);
  box-shadow: 0px 6px 20px rgb(157, 160, 252, 1);
`;

const Header = () => {
  return (
    <>
      <StyledNavbar>
        <Link to='/postingRouter'>Brand</Link>
      </StyledNavbar>
    </>
  );
};

export default Header;
