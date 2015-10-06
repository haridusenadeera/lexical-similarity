import React from 'react';
import classNames from 'classnames';


export default class Button extends React.Component {
    displayName = 'Button'

    static propTypes = {
      btnStyle: React.PropTypes.string,
      btnSize: React.PropTypes.string,
      href: React.PropTypes.string,
      name: React.PropTypes.string
    }

    render() {
      const {btnStyle, btnSize, href, name} = this.props;
      return (
        <a href={href} type="button" className= {classNames('btn', btnStyle, btnSize)}>
          {name}
        </a>
      );
    }
}
