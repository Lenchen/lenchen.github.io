import React from 'react'
import styles from './button.module.scss'

const Button = () => {
    
    const classNames = `button ${styles.buttonPrimary}`
    return (
        <button className={classNames}>Get in touch</button>
    )
}

export default Button