import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  // 接收的props进行 类型、必要性的限制
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  render() {
    const { todos, updateTodo, deleteTodo } = this.props

    return (
      <ul className='todo-main'>
        {todos.map(item => {
          return <Item key={item.id} {...item} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        })}
      </ul>
    )
  }
}
