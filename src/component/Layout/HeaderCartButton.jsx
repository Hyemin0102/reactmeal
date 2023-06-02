import React from 'react'
import classes from './HeaderCartButton.module.css';
import { CartIcon } from '../Cart/CartIcon';

export const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onclick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Cart</span>
        <span className={classes.badge}>1</span>
    </button>
  )
}
