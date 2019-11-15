import React from "react"
import styles from './line.module.scss'

const Line = (props) => {
    let classNames

    // if (props.center) {
    //     classNames = styles.line + " " + styles.center
    // } else {
    //     classNames = styles.line
    // }

    // classNames = props.center ? styles.line + " " + styles.center : styles.line


    const variant = props.variant || "md" 
    const center = props.center ? styles.center : ''
    
    classNames = `${styles.line} ${styles[variant]} ${center}`

    return (
        <div className={classNames}></div>
    )
}

export default Line
