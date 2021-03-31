import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../redux/slices/authSlice';
import {
  StyledAvatar,
  StyledButton,
  StyledContainer,
  StyledInput,
  StyledLabel,
  StyledWrapper,
} from './LoginStyles';

export const Login = ({ authenticate }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <StyledWrapper>
      <div
        style={{
          background: 'red',
          height: '100px',
          width: '200px',
          top: '11.875rem',
          position: 'absolute',
        }}
      ></div>
      <StyledContainer>
        <StyledAvatar />
        <form>
          <StyledLabel htmlFor='username'>Username</StyledLabel>

          <StyledInput
            name='username'
            type='text'
            onChange={handleChange}
          ></StyledInput>

          <StyledLabel htmlFor='password'>Password</StyledLabel>

          <StyledInput
            name='password'
            type='password'
            onChange={handleChange}
          />
        </form>
        <StyledButton type='button' onClick={() => authenticate(credentials)}>
          Login
        </StyledButton>
      </StyledContainer>
    </StyledWrapper>
  );
};
const mapDispatchtoProps = dispatch => {
  return {
    authenticate: data => dispatch(authenticate(data)),
  };
};
export default connect(null, mapDispatchtoProps)(Login);
