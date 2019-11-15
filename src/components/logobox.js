import React from "react"
import styles from './logobox.module.scss'

const Logobox = () => {
    return (
        <div className={styles.logobox}>
            <div className="columns">
                <div className="column">Marc O'Polo</div>
                <div className="column">Douglas</div>
                <div className="column">Recolution</div>
                <div className="column">Paul Hewitt</div>
                <div className="column">AXA</div>
                <div className="column">Weber Grill</div>
                <div className="column">s.Oliver Group</div>
            </div>
        </div>
    )   
}

export default Logobox