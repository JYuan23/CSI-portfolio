import React from 'react';
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom';

function Navbar() {
    return (
      <div>
        <Link to="/">home </Link>
        <Link to="/Insight">I1 </Link>
        <Link to="/insight2">I2 </Link>
      </div>
    );
};

export default Navbar;