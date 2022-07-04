import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  // 接收的props进行 类型、必要性的限制
  static propTypes = {
    submitTodo: PropTypes.func.isRequired
  }

  handelInPut = event => {
    //解构赋值
    const { keyCode, target } = event
    //判断是否是 回车
    if (keyCode !== 13) return
    //添加的名字不能为空
    if (target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    console.log(target.value)
    //准备好一个 todo 对象
    const todoObj = { id: nanoid(), name: target.value, done: false }
    //将todoObj 传递给 app
    this.props.submitTodo(todoObj)
    //清空输入
    target.value = ''
  }
  render() {
    return (
      <div className='todo-header'>
        <input onKeyUp={this.handelInPut} type='text' placeholder='请输入你的任务名称，按回车键确认' />
      </div>
    )
  }
}
