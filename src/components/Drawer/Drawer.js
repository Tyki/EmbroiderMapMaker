import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { SketchPicker } from 'react-color';
import { inject } from 'mobx-react'

class AppDrawer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: 5,
      lines: 5,
      pickedColor: '#fff',
      size: this.props.Store.size
    }
  }

  render () {
    return (
      // <Drawer
      //   variant="persistent"
      //   anchor="left"
      //   open={true}
      // >
        <List>
          <form onSubmit={this.updateStore}>
          <ListItem>
            Colonnes:&nbsp;
            <input type="number" 
              value={this.state.columns} 
              onChange={(e) => this.setState({columns: parseInt(e.target.value)})} 
            />
          </ListItem>

          <ListItem>
            Lignes:&nbsp;
            <input type="number" 
              value={this.state.lines} 
              onChange={(e) => this.setState({lines: parseInt(e.target.value)})} 
            />
          </ListItem>

          <ListItem>
            Taille:&nbsp;
            <input type="number" 
              value={this.state.size} 
              onChange={(e) => this.setState({size: parseInt(e.target.value)})} 
            />
          </ListItem>

          <ListItem>
            <button type="submit" onClick={this.updateStore}>Valider</button>
          </ListItem>
          </form>

          <ListItem>
            <SketchPicker 
              color={this.state.pickedColor}
              onChangeComplete={ this.handleChangeComplete }/>
          </ListItem>
        </List>
      // </Drawer>
    )
  }

  handleChangeComplete = (color) => {
    this.props.Store.setColor(color)
  };

  updateStore = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault()
    }
    this.props.Store.setLines(this.state.lines)
    this.props.Store.setColumns(this.state.columns)
    this.props.Store.setSize(this.state.size)
  }
}

export default inject('Store')(AppDrawer)