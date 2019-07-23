import React, { Component } from 'react';
import TodoList from '../list';
import styles from './styles.module.css';
import cx from 'classnames';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        'learn js',
        'learn react',
        'learn webpack'
      ],
      todo: '',
    };
  }

  

  addTodo = () => {
    const updatedTodos = [
      ...this.state.todos,
      this.state.todo,
    ];
    this.setState({
      todos: updatedTodos.sort(),
      todo: '',
    });
  }

  onTextChange = e => {
    this.setState({
      todo: e.target.value
    });
  }

  deleteTodo = (todo) => {
    const updatedTodos = this.state.todos.filter(t => {
      return t !== todo;
    }).sort();
    this.setState({ todos: updatedTodos })
  }

  render() {
    return <div className={styles.app}>
      <input type='text' value={this.state.todo} onChange={this.onTextChange} />
      <button onClick={this.addTodo}>Add</button>
      <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    </div>;
  }
}

export default App;