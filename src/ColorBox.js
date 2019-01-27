import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const opacity = this.props.opacity
    if (opacity >= 0.2) {
      console.log(opacity)
      return (
        <div className="color-box" style={{opacity}}>
          <ColorBox opacity={opacity-0.1} />
        </div>
      )
    } else {
    return null
    }
  }
}
