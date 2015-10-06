import React from 'react';

export default class Column extends React.Component {
    displayName = 'Bootstrap column'

    static propTypes ={
      style: React.PropTypes.string
    }

    render() {
      return (
        <div className={this.props.style}>
            {this.props.children}
        </div>
      );
    }
}
