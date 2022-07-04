import React, { Component } from 'react'
import './app.css'
import Header from './components/Header'
import List from './components/List'

import Footer from './components/Footer'

export default class App extends Component {
  //状态在哪里,操作状态的方法就在哪里

  //初始化状态
  state = {
    todos: [
      { id: '01', name: '睡觉', done: true },
      { id: '02', name: '吃饭', done: true },
      { id: '03', name: '打游戏', done: false },
      { id: '04', name: '打豆豆', done: true }
    ]
  }

  //addTodo 用于添加一个Todo,接受的参数是Todo 对象
  addTodo = todoObj => {
    //获取原todos
    const { todos } = this.state
    //追加一个todo
    const newTodos = [todoObj, ...todos]
    //更新 state
    this.setState({ todos: newTodos })
  }

  //更改todo
  updateTodo = (id, done) => {
    //获取状态中的 todos
    const { todos } = this.state

    //匹配 处理数据
    const newTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, done: done }
      } else {
        return item
      }
    })
    //更新 state
    this.setState({ todos: newTodos })
  }

  //删除一个 todo
  deleteTodo = id => {
    //获取原来的 todo
    const { todos } = this.state
    //删除指定的 id 的todo
    const newTodos = todos.filter(item => {
      return item.id !== id
    })
    //更新状态
    this.setState({ todos: newTodos })
  }

  //全选
  checkAll = done => {
    //获取原来的todos
    const { todos } = this.state
    //匹配处理
    const newTodos = todos.map(item => {
      return { ...item, done: done }
    })

    this.setState({ todos: newTodos })
  }

  //删除已完成
  clearAllDone = () => {
    //获取原 todos
    const { todos } = this.state
    //新todos
    const newTodos = todos.filter(item => {
      //返回 done 值为 false 的 todo
      return !item.done
    })
    this.setState({ todos: newTodos })
  }

  render() {
    return (
      <div>
        <div className='todo-container'>
          <div className='todo-wrap'>
            <Header submitTodo={this.addTodo} />
            <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
            <Footer todos={this.state.todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone} />
          </div>
        </div>
      </div>
    )
  }
}
