import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/slices/authSlice';
import { StyledBrand, StyledNavbar, StyledNavLinks } from './HeaderStyles';

export const Header = ({ isLoggedIn, logout }) => {
  return (
    <header>
      <StyledNavbar>
        <StyledBrand>
          <Link to='/'>Eagle Spy</Link>
        </StyledBrand>
        <StyledNavLinks>
          <Link to='/addDefect'>Add Defect</Link>
          <Link to='/Second'>Second</Link>
          <Link to='/Third'>Third</Link>
          {isLoggedIn === false ? (
            <Link to='/login'>Login</Link>
          ) : (
            <Link to='/login' onClick={logout}>
              Logout
            </Link>
          )}
        </StyledNavLinks>
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
