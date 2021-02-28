import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getDefects } from '../redux/slices/defectsSlice';
import Dashboard from './Dashboard';

export const HomePage = ({ getDefects }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDefects());
  // }, [dispatch]);
  return (
    <>
      <Dashboard />
    </>
  );
};
const mapDispatchToProps = dispatch => {
  return { getDefects: () => dispatch(getDefects()) };
};
export default connect(null, mapDispatchToProps)(HomePage);
