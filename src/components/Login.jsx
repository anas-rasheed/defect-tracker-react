import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { authenticate } from '../redux/slices/authSlice';

const StyledWrapper = styled.div`
  height: calc(100% - 60px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .divid {
    background: red;
    height: 100px;
    width: 200px;
    top: 11.875rem;
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
  backdrop-filter: blur(7px);
  box-shadow: 6px 6px 20px rgba(157, 160, 252, 0.8);
  z-index: 2;
`;

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
      <div className='divid'></div>
      <StyledContainer>
        <form>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor='username'>Username</label>
                </td>
                <td>
                  <input name='username' type='text' onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='password'>Password</label>
                </td>
                <td>
                  <input
                    name='password'
                    type='password'
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button
                    type='button'
                    onClick={() => authenticate(credentials)}
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
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
