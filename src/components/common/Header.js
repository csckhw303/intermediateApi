/**
 * Created by ChungCh on 6/9/2017.
 */

import React, {PropTypes} from 'react';
import { Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header =  ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClasName="active">About</Link>
      {" | "}
      <Link to="/courses" activeClasName="active">courses</Link>
      {loading && <LoadingDots interval={100} dots={20}  />}
    </nav>
  );
};
Header.propTypes = {
  loading: PropTypes.bool
};
export default Header;
