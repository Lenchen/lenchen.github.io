import React from 'react'
import Line from '../components/line'
import Button from '../components/button'
import styles from "./getintouch.module.scss"

const GetInTouch = () => {
  return (
    <section id="contactbox" className="is-centered has-max-width">
      <h2>Get In Touch</h2>
      <Line variant="md" />
      <p className="margin-md textBold">UX Design improves every product.
      </p>
      <div className={`margin-md ${styles.contactbox}`}>
        <a href="mailto:test@test.com" className={styles.ctalink}>
          <span className="icon"><i className="far fa-paper-plane"></i></span> 
          <span className="is-underlined has-icon-padding">Send me an E-Mail</span>
        </a>
        <p className="textSmall">Tell me a little about your project so I can get a first impression on 
        how I can support you.</p>
      </div> 
      <p className="textSmall">
        If you are a social organisation always struggeling with numbers, 
        don’t hesitate to contact me. I’d love to give you some advice for free.   
      </p>
      {/* <Button />
      
      <p className="textSmall">If you are a social organisation always struggeling with numbers, 
      don’t hesitate to contact me. I’d love to give you some advice for free.</p> */}
    </section>
  )
}

export default GetInTouch