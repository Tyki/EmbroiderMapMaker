import React from 'react'
import { Rect } from 'react-konva';
import {inject, observer} from 'mobx-react'

class Rectangle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: 'white'
    }
  }
  render () {
    return <Rect 
      x={this.props.x} 
      y={this.props.y} 
      width={10} 
      height={10} 
      fill={this.state.color}
      stroke='black'
      strokeWidth={1} 
      onClick={this.handleClick} 
      onMouseOver={this.handleMouseOver} />
  }

  handleClick = () => {
    this.setState({
      color: this.props.Store.color
    })

    console.log(this.state)
  }

  handleMouseOver = (e) => {
    if (this.props.Store.mouseDown) {
      this.setState({
        color: this.props.Store.color
      })
    }
  }
}
  
export default inject('Store')(observer(Rectangle))
