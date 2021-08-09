import React from 'react';
import { SketchPicker } from 'react-color';

class ColorSelector extends React.Component {
  state = {
    displayColorPicker: false,
    background: '#bd8867',
  };

  handleChangeComplete = (color) => this.setState({ background: color.hex });

  handleChange = (color, e) => {
    this.props.setCurrColor(color.hex);
    this.setState({ background: color.hex });
  };

  handleClick = () =>
    this.setState({ displayColorPicker: !this.state.displayColorPicker });

  handleClose = () => this.setState({ displayColorPicker: false });

  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    };
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    };
    return (
      <div>
        <button onClick={this.handleClick}>Pick Color</button>
        {this.state.displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={this.handleClose} />
            <SketchPicker
              color={this.state.background}
              onChangeComplete={this.handleChangeComplete}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ColorSelector;
