import React from 'react';

export default class NavbarItems extends React.Component {
    displayName = 'Navbar Item List'

    render() {
      return (
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              {this.props.children}
            </ul>
          </div>
      );
    }
}
