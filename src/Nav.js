import { Link } from 'react-router-dom'
import React from 'react';

function Nav(props) {
  return (
    <div className="links" id="navbar">
      <div className="link"><Link to="/home"> Home </Link> </div>
      <div className="link"><Link to="/insight1"> Insight 1 </Link> </div>
      <div className="link"><Link to="/insight2"> Insight 2 </Link> </div>
    </div>
  );
}

export default Nav;