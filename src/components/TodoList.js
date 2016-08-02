import React, { Component } from 'react';
import { Table, TableBody } from 'material-ui/Table';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <Table>
        <TableBody>
          {this.props.todos.map(todo => <Todo key={todo.id} todo={todo} />)};
        </TableBody>
      </Table>
    );
  }
}
