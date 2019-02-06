import { observable, action, decorate } from 'mobx'

class AppStore {
  columns = 5;
  lines = 5;
  color = '#fff'
  mouseDown = false

  setLines = (lines) => {
    this.lines = lines
  }

  setColumns = (columns) => {
    this.columns = columns
  }

  setColor = ({hex}) => {
    this.color = hex
  }

  setMousedown = (mouseDown) => {
    this.mouseDown = mouseDown
  }
}

decorate(AppStore, {
  columns: observable,
  lines: observable,
  color: observable,
  mouseDown: observable,

  setLines: action,
  setColumns: action,
  setColor: action,
  setMousedown: action
})

export const store = new AppStore()