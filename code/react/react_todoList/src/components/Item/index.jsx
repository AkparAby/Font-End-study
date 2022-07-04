import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
  // 接收的props进行 类型、必要性的限制
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  //标识鼠标 移入 移出
  state = { mouse: false }

  //勾选,取消勾选的回调
  handelCheck = id => {
    return event => {
      //console.log(id, event.target.checked);
      this.props.updateTodo(id, event.target.checked)
    }
  }

  //删除todo的回调
  handelDelet = id => {
    //询问确认删除
    if (window.confirm('确定删除吗？')) {
      this.props.deleteTodo(id)
    }
    
  }

  //鼠标 移入 移出回调
  handelMouse = flag => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state

    return (
      <li
        onMouseEnter={this.handelMouse(true)}
        onMouseLeave={this.handelMouse(false)}
        style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
      >
        <label>
          <input type='checkbox' checked={done} onChange={this.handelCheck(id)} />
          <span>{name}</span>
        </label>
        <button
          onClick={() => this.handelDelet(id)}
          className='btn btn-danger'
          style={{ display: mouse ? 'block' : 'none' }}
        >
          删除
        </button>
      </li>
    )
  }
}
