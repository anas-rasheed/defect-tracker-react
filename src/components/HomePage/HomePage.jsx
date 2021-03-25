import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { getDefects } from '../../redux/slices/defectsSlice';
import Dashboard from '../Dashboard';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  place-items: center;
  height: calc(100% - 60px);
  width: 100%;
`;

export const HomePage = ({ getDefects }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDefects());
  // }, [dispatch]);
  return (
    <StyledWrapper>
      <Dashboard />
    </StyledWrapper>
  );
};
const mapDispatchToProps = dispatch => {
  return { getDefects: () => dispatch(getDefects()) };
};
export default withRouter(connect(null, mapDispatchToProps)(HomePage));
