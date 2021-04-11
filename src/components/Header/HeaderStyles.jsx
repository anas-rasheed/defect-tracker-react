import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  height: 3.75rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--oxford-blue);
  /* box-shadow: 0px 6px 0.625rem rgba(157, 160, 252, 1); */
`;

export const StyledBrand = styled.div`
  display: flex;
  align-items: center;
  > a {
    color: var(--cool-gray);
    text-decoration: none;
    padding: 0.625rem;
  }
`;

export const StyledNavLinks = styled.div`
  display: flex;
  height: inherit;
  align-items: center;
  @media screen and (max-width: 786px) {
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--cool-gray);
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  height: inherit;
  text-decoration: none;
  padding: 0 1rem;
  transition: all 350ms ease-in-out;
  &::after {
    opacity: 0;
    content: '';
    height: 0.313rem;
    width: 100%;
    display: block;
    background: var(--primary-background);
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateX(-100px);
  }
  &:hover {
    background: var(--accent);
    opacity: 0.8;
    &::after {
      opacity: 0.8;
      transform: translateX(0);
    }
  }
  &.active {
    &::after {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
export const StyledMenuContainer = styled.div`
  cursor: pointer;
  display: inherit;
  @media screen and (min-width: 786px) {
    display: none;
  }
`;
export const StyledMenu = styled.div`
  height: 0.125rem;
  background: var(--primary-background);
  position: relative;
  width: 2rem;
  margin: 1rem;
  ::before,
  ::after {
    content: '';
    position: absolute;
    height: 0.125rem;
    width: 2rem;
    background: var(--primary-background);
  }
  ::before {
    transform: translateY(-0.5rem);
  }
  ::after {
    transform: translateY(0.5rem);
  }
`;

export const StyledMenuClose = styled.div`
  height: 0.125rem;
  position: relative;
  width: 1.5rem;
  margin: 1rem;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 0.125rem;
    width: 1rem;
    background: var(--primary-background);
  }
  &::before {
    transform: rotateZ(45deg);
  }
  &::after {
    transform: rotateZ(-45deg);
  }
`;
