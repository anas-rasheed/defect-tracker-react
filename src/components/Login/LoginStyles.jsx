import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: calc(100% - 3.75rem);
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-content: center;
`;

export const StyledContainer = styled.div`
  height: 350px;
  grid-column-start: 2;
  row-gap: 30px;
  padding: 0px 30px;
  border: 1px solid rgba(157, 160, 252, 0.8);
  border-radius: 2rem;
  display: grid;
  place-content: center;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(7px);
  box-shadow: 6px 6px 20px rgba(157, 160, 252, 0.8);
  > form {
    width: 100%;
  }
  z-index: 2;
`;

export const StyledAvatar = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: white;
  margin: auto;
  border: 2px solid var(--cool-gray);
`;

export const StyledLabel = styled.label`
  width: 100%;
  // height: 100%;
  position: absolute;
  pointer-events: none;
  font-size: 1rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: 0;
  padding-top: 20px;
  margin: 5px 0px;
  border-bottom: 1px solid var(--oxford-blue);
`;

export const StyledButton = styled.button`
  background: var(--primary-background);
  width: 50%;
  min-width: fit-content;
  margin: auto;
  border: 0;
  padding: 1rem 2rem;
  border-radius: 50px;
  outline: none;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.9;
  }
`;
