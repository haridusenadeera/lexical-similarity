
import React from 'react';

export default class Navbar extends React.Component {
    displayName = 'Navigation bar wrapper'

    render() {
      return (
        <nav className="navbar navbar-inverse" role="navigation">
            <div className="container">
                {this.props.children}
            </div>
        </nav>
      );
    }
}
