//모달 팝업창
import React from 'react'
import classes from './Modal.module.css'
import { createPortal } from 'react-dom'
//import ReactDOM from 'react-dom' 이렇게 사용해서
//{ReactDOM.createPortal(<Backdrop />, portalElement)} 이렇게 사용 가능

//모달뒤 까만 반투명
const Backdrop=(props)=>{
  return <div className={classes.backdrop} onClick={props.onClose}> </div>
}

//실제 모달(가운데 하얀네모)
const ModalOverlay=(props)=>{
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <div>
      {createPortal(<Backdrop onClose={props.onClose}/>, portalElement)} {/* Modal 프롭스에서 받은 onClose 다시 backdrop으로 전달 */}
      {createPortal( <ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </div>
  )
}

export default Modal

//ReactDOM.createPortal(자식요소, 포탈)
//createPortal - modal처럼 프로그램이 상 root와 분리해있는게 편한 경우 사용