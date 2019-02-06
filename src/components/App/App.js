import React, { Component } from 'react';
import './App.css';
import { Stage, Layer } from 'react-konva';
import Rectangle from '../Rectangle/Rectangle'
import AppDrawer from '../Drawer/Drawer'
import { inject, observer } from 'mobx-react'
import Grid from '@material-ui/core/Grid'

class App extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={3}>
          <AppDrawer />      
        </Grid>

        <Grid item xs={9}>
          {<Stage width={window.innerWidth} height={window.innerHeight}
            onMouseDown={() => this.handleMousedown(true)}
            onMouseUp={() => this.handleMousedown(false)}>
            <Layer>
              {[...Array(this.props.Store.lines)].map((val, y) => {
                return [...Array(this.props.Store.columns)].map((val, x) => {
                  return (
                    <Rectangle 
                      key={`x-${x*10}#y-${y*10}`}
                      x={x*10} 
                      y={y*10} />
                  )
                })
              })}
            </Layer>
          </Stage>}
        </Grid>
      </Grid>
    );
  }

  handleMousedown = (mouseDown) => {
    this.props.Store.setMousedown(mouseDown)
  }
}

export default inject('Store')(observer(App));
