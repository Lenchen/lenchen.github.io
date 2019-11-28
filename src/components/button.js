import React from 'react'
import styles from './button.module.scss'

const Button = (props) => {
    
    const classNames = `button ${styles.buttonPrimary}`
    return (
        <button className={classNames} onClick={props.onClick}>
          <span className="icon"><i className="far fa-paper-plane"></i></span> 
          <span className="has-icon-padding">Get in touch</span></button>
    )
}

export default Button