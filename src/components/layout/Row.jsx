import React from 'react';

export default class Row extends React.Component {
    displayName = 'Bootstrap row'

    render() {
      return (
          <div className="row">
              {this.props.children}
          </div>
      );
    }
}
