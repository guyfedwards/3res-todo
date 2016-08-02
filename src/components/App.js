import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

import { connect } from 'react-redux';

class Main extends Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render () {
    return (
      <div>
        <AppBar title='3RES Todo' iconClassNameRight='muidocs-icon-navigation-expand-more' />
        <TodoList todos={this.props.todos} />
        <AddTodo />
      </div>
    );
  }
}

Main.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

function mapStateToProps(todos) {
  return { todos };
}

export default connect(mapStateToProps)(Main);
