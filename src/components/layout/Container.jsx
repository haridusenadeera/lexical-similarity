import React from 'react';

export default class Container extends React.Component {
    displayName = 'Container for content'

    render() {
      return (
        <div className="container">
            {this.props.children}
        </div>
      );
    }
}
