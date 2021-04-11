import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/slices/authSlice';
import {
  StyledBrand,
  StyledMenu,
  StyledMenuClose,
  StyledMenuContainer,
  StyledNavbar,
  StyledNavLink,
  StyledNavLinks,
} from './HeaderStyles';

export const Header = ({ isLoggedIn, logout }) => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <header>
      <StyledNavbar>
        <StyledBrand>
          <NavLink exact to='/'>
            <b>Eagle Spy</b>
          </NavLink>
        </StyledBrand>
        <StyledNavLinks>
          <StyledNavLink to='/addDefect'>Add Defect</StyledNavLink>
          <StyledNavLink to='/Second'>Second</StyledNavLink>
          <StyledNavLink to='/Third'>Third</StyledNavLink>
          {isLoggedIn === false ? (
            <StyledNavLink to='/login'>Login</StyledNavLink>
          ) : (
            <StyledNavLink to='/login' onClick={logout}>
              Logout
            </StyledNavLink>
          )}
        </StyledNavLinks>
        <StyledMenuContainer onClick={toggleLinks}>
          {!showLinks ? <StyledMenu /> : <StyledMenuClose />}
        </StyledMenuContainer>
      </StyledNavbar>
    </header>
  );
};
const mapStateToProps = state => ({
  isLoggedIn: state.authReducer.isLoggedIn,
});
const mapDispatchtoProps = dispatch => {
  return { logout: () => dispatch(logout()) };
};
export default connect(mapStateToProps, mapDispatchtoProps)(Header);
