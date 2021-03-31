import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  height: 3.75rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--oxford-blue);
  // box-shadow: 0px 6px 0.625rem rgba(157, 160, 252, 1);
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
  > a {
    color: var(--cool-gray);
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    height: inherit;
    text-decoration: none;
    padding: 0 1rem;
  }
  > a:hover,
  a:active {
    background: var(--accent);
    opacity: 0.8;
    transition: all 200ms ease-ease-in;
    &::after {
      content: '';
      height: 0.313rem;
      width: 100%;
      display: block;
      background: var(--primary-background);
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

export const StyledMenu = styled.div`
  height: 0.125rem;
`;
