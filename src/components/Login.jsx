import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logIn } from '../redux/slices';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100%;
  widht: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .divid {
    background: red;
    height: 100px;
    width: 200px;
    top: 190px;
    position: absolute;
  }
`;
const StyledContainer = styled.div`
  height: 350px;
  width: 550px;
  border: 1px solid rgba(157, 160, 252, 0.8);
  border-radius: 2rem;
  display: grid;
  place-content: center;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(15px);
  box-shadow: 6px 6px 20px rgba(157, 160, 252, 0.8);
  z-index: 2;
`;
const StyledInput = styled.div``;

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn(credentials));
    history.push('/');
  };
  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <StyledWrapper>
      <div className='divid'></div>
      <StyledContainer>
        <form>
          <StyledInput>
            <label htmlFor='username'>Username</label>
            <input name='username' type='text' onChange={handleChange} />
          </StyledInput>
          <StyledInput>
            <label htmlFor='password'>Password</label>
            <input name='password' type='password' onChange={handleChange} />
          </StyledInput>
          <button type='submit' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Login;
