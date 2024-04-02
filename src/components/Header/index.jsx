import React, { Component } from "react";

import "./index.css";
import { nanoid } from "nanoid";

export default class Header extends Component {
  handleKeyUp = (e) => {
    const { keyCode, target } = e;
    if (keyCode !== 13) return;
    if (target.value.trim() === "") {
      alert("请输入待办");
    }
    const toObj = { id: nanoid(), name: target.value, done: false };
    this.props.setTodo(toObj);
	target.value = ''
  };
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
