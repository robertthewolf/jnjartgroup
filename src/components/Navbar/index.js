import React from 'react';
import Link from 'gatsby-link';
import logo from '../img/logo.svg';

export default class Navbar extends React.Component {
render() {
return(
  <nav >
      <Link to="/">
          <img src={logo} alt="JNJ Art Group" />
      </Link>
      <ul>
        <li>
          <Link activeClassName="active" to={`/mirror/`}>
            <span className="en">Mirror</span>
            <span className="cs">Zrcadlo</span>
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to={`/photography/`}>
            <span className="en">Photography</span>
            <span className="cs">Fotka</span>
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to={`/jewellery/`}>
            <span className="en">Jewellery</span>
            <span className="cs">Šperk</span>
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to={`/glass/`}>
            <span className="en">Glass</span>
            <span className="cs">Sklo</span>
          </Link>
        </li>
      </ul>
  </nav>
);
}
}
