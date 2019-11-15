import React from 'react'
import Line from '../components/line'
import styles from "./getintouch.module.scss"

const GetInTouch = () => {
  return (
    <section class="has-text-centered is-centered has-max-width">
      <h2>Get in touch</h2>
      <Line center variant="md" />
      <p className="margin-md">UX Design verbessert jedes Produkt.
      </p>
      <p className="textSmall margin-md">If you are a social organisation always struggeling with numbers, 
      don’t hesitate to contact me. I’d love to give you some advice for free.</p>
      <a href="mailto:test@test.com" className="margin-lg">Send me an E-Mail</a>
      <p className="textSmall">Tell me about your project so I can get a first impression on 
      how I can support you.</p>
    </section>
  )
}

export default GetInTouch