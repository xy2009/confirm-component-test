import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * 请写一个满足以下要求的confirm方法组件（可以参考一下 ， 
 * antd 的 Modal 组件的 Modal.info, Modal.waring . 这样的用法 ）：

（1）能在任意组件(示例如下)的componentDidMount生命周期中挂载，并返回一个promise；
（2）能通过返回值判断用户点击的是确定还是取消。

async componentDidMount(){
    let res = await confirm("确定删除吗")
    if(res) {
        console.log("是")
    } else {
        console.log("否")
    }
}*/

const Confirm = (msg) => {
  return new Promise((resolve, reject) => {
    // 创建根组件div
    const mRoot = document.createElement('div');
    document.body.appendChild(mRoot);
    // 移除组件
    const hideConfirm = (remove) => {
      if (mRoot && remove) {
        ReactDOM.unmountComponentAtNode(mRoot);
        document.body.removeChild(mRoot);
      }
      return resolve(remove);
    };
    ReactDOM.render(
      <div>
        <p>{msg}</p>
        <button onClick={((e) => {
          hideConfirm(false);
        })}
        >cancle</button>
        <button onClick={((e) => {
          hideConfirm(true);
        })}
        >ok</button>
      </div>,
      mRoot
    )
  });
};
export default Confirm;