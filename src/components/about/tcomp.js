import React, {PropTypes} from 'react';


class Button extends React.Component {
  render() {
    const {children} = this.props;
    return (
      {type: 'button',
       props: {
        className: 'button button',
        children: {
          type: 'b',
          props: {
            children: children
          }
        }
      }
    });
  }
}

Button.prototype = {
  children: PropTypes.object
};
export  default Button;