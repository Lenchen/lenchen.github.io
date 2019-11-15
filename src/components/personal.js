import React from 'react'
import Button from './button.js'
import Line from './line.js'
import styles from './personal.module.scss'
import image from '../../static/lena.png'

const Personal = () => {
    return (
        <section className={styles.personal}>
            <div className="columns is-vcentered">
                <div className="column is-two-fifths">
                    <img src={image} />
                </div>
                <div className="column is-three-fifths">
                    <h2>Hey there!</h2>
                    <Line variant="md" />
                    <p className="margin-md has-max-width">I am Lena, a passionate freelance UX Designer, 
                    always excited about being part of projects that take the world a little further.  
                    No matter wether you are developing a new product, need advice about improvements 
                    or are looking for a makeover I will find solutions that thrill your users and 
                    fulfill your values and goals with ease. <br/><br/>
                    Let's take your ideas and projects out into the world together!
                    </p>
                    <Button />
                </div>
            </div>
        </section>
    )
}

export default Personal