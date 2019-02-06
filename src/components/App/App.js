import React, { Component } from 'react';
import './App.css';
import { Stage, Layer } from 'react-konva';
import Rectangle from '../Rectangle/Rectangle'
import AppDrawer from '../Drawer/Drawer'
import { inject, observer } from 'mobx-react'
import Grid from '@material-ui/core/Grid'

class App extends Component {
  constructor(props) {
    super(props)

    setTimeout(() => {
      document.getElementsByClassName('konvajs-content')[0].setAttribute('id', 'content')
    }, 500)
  }
  render() {
    const size = this.props.Store.size
    const width = (this.props.Store.columns + 2) * size
    const height = (this.props.Store.lines + 2) * size

    return (

      <Grid container >
        <Grid item xs={3} className={'notCanvas'}>
          <AppDrawer />      
        </Grid>

        <Grid item xs={9}>
          <div style={{padding: '30px'}}>
            <Stage width={width} height={height} id={'content'} 
              onMouseDown={() => this.handleMousedown(true)}
              onMouseUp={() => this.handleMousedown(false)}
            >
              <Layer>
                {[...Array(this.props.Store.lines)].map((val, y) => {
                  return [...Array(this.props.Store.columns)].map((val, x) => {
                    return (
                      <Rectangle 
                        key={`x-${x*size}#y-${y*size}`}
                        x={x*size} 
                        y={y*size} 
                        size={size}  
                      />
                    )
                  })
                })}
              </Layer>
            </Stage>
          </div>
        </Grid>
      </Grid>
    );
  }

  handleMousedown = (mouseDown) => {
    this.props.Store.setMousedown(mouseDown)
  }
}

export default inject('Store')(observer(App));
