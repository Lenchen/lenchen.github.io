import React from "react"
import Logobox from './logobox'
import Line from './line'
import styles from './hero.module.scss'

const Hero = () => {
    return (
        <section className="has-text-centered">
            <div className={styles.heroText}>
                <h2>Lena Demski</h2>
                <h3>UX Design &amp; Consulting</h3>
                <Line center variant="lg" />
                <h1>I design digital solutions that help businesses pursue their values and reach their goals.</h1>
            </div>
            <Logobox />
        </section>
    )
}

export default Hero