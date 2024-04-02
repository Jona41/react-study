import React, { Component } from "react";
import './App.css'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, name: "吃饭", done: true },
      { id: 2, name: "不知道干嘛", done: true },
      { id: 3, name: "看白菜", done: false },
    ],
  };
  // 设置一个todo
  setTodo = (toObj) => {
    const { todos } = this.state;
    const newTodos = [toObj, ...todos];
    this.setState({ todos: newTodos });
  };
  // 更新todo
  updateTodo = (id, done) => {
    console.log(id, done);
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      if (item.id === id) return { ...item, done };
      else return item;
    });
    this.setState({ todos: newTodos });
  };
  // 删除todo
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      if (todoObj.id !== id) return todoObj;
    });
    this.setState({ todos: newTodos });
  };

  // 全选
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((obj) => {
      // obj.done = done
      // return obj
      return { ...obj, done };
    });
    this.setState({ todos: newTodos });
  };
  // 清除所有已完成
  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((obj) => {
      if (!obj.done) return obj;
    });
    this.setState({ todos: newTodos });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <Header setTodo={this.setTodo}></Header>
        <List
          todos={todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        ></List>
        <Footer
          todos={todos}
          checkAllTodo={this.checkAllTodo}
          clearAllDone={this.clearAllDone}
        ></Footer>
      </div>
    );
  }
}
