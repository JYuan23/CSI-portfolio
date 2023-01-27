import { Link, useParams } from 'react-router-dom'
import React from 'react';
import './Insight.css';

const Insight = (props) => {

  return (
    <div className="container">
      <div>
        <Link className="links" to="/insights/1">Insight 1</Link>
        <Link className="links" to="/insights/2">Insight 2</Link>
        <div className="insight">
          <div> {props.text} </div>
        </div>
      </div>
    </div>
  );
}

export default Insight;
