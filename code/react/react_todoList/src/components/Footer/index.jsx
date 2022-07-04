import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  //清除所有已完成
  handelClearAllDone = () => {
    this.props.clearAllDone()
  }
  handelCheckAll = event => {
    this.props.checkAll(event.target.checked)
  }

  render() {
    const { todos } = this.props
    //已完成的个数
    const doneCount = todos.reduce((pre, current) => {
      return pre + (current.done ? 1 : 0)
    }, 0)
    //全部个数
    const total = todos.length

    return (
      <div className='todo-footer'>
        <label>
          <input type='checkbox' checked={doneCount === total && total !== 0} onChange={this.handelCheckAll} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handelClearAllDone} className='btn btn-danger'>
          清除已完成任务
        </button>
      </div>
    )
  }
}
