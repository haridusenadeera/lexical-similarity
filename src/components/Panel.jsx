import React from 'react';

export default class Panel extends React.Component {
    displayName = 'Bootstrap default panel'

    static propTypes = {
      title: React.PropTypes.string
    }

    render() {
      return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4>{this.props.title}</h4>
            </div>
            <div className="panel-body">
                {this.props.children}
            </div>
        </div>
      );
    }
}
