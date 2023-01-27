import React from 'react';
import { Link } from 'react-router-dom'

const Other = () => {
  return <div>
  <Link to="/test1"> Go to Test1 </Link> 
    <Link to="/test2"> Go to Test2 </Link> 
    This is Other
    </div>
}

export default Other;