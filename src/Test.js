import React from 'react';
import { Link } from 'react-router-dom'

const Test = (props) => {
  return <div>
    <Link to="/other"> Go to Other </Link> 
    This is Test {props.prop}
    </div>
}

export default Test;