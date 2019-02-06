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
      pickedColor: '#fff'
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
            <button type="button" onClick={this.updateStore}>Valider</button>
          </ListItem>

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

  updateStore = () => {
    this.props.Store.setLines(this.state.lines)
    this.props.Store.setColumns(this.state.columns)
  }
}

export default inject('Store')(AppDrawer)