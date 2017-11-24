/**
 * Created by ChungCh on 6/8/2017.
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
       <div className="jumbotron">
       <p>React, Redux and React Router</p>
       <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
       </div>
    );
  }
}

export  default HomePage;
