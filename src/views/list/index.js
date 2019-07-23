import React, { Component } from "react";
import { List, ListItem } from "../../components/common";

class TodoList extends Component {
  render() {
    return (
      <List>
        {this.props.todos.map(todo => (
          <ListItem>
            {todo}
            <a href="#" onClick={e => this.props.deleteTodo(todo)}>
              delete
            </a>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default TodoList;
