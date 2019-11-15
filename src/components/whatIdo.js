import React from 'react'
import Line from '../components/line'
import styles from "./whatIdo.module.scss"

const WhatIDo = () => {
  return (
    <section class="is-centered has-max-width">
      <div className="has-text-centered margin-lg">
        <h2>What I do</h2>
        <Line center variant="md" />
        <p>Every project is different and needs different solutions. 
            I help you figuering out which approach is best for your business and accompany 
            you through the whole process.
        </p>
      </div>
      <div className="has-max-width margin-xl">
        <div className="columns">
          <div className="column">
            <h4>User Research</h4>
            <Line variant="sm" />
            <p>Precise definition which user groups your project is facing, </p>
          </div>
          <div className="column">
            <h4>User Research</h4>
            <Line variant="sm" />
            <p>Precise definition which user groups your project is facing, </p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h4>User Research</h4>
            <Line variant="sm" />
            <p>Precise definition which user groups your project is facing, </p>
          </div>
          <div className="column">
            <h4>User Research</h4>
            <Line variant="sm" />
            <p>Precise definition which user groups your project is facing, </p>
          </div>
        </div>
      </div>
      <div className="has-text-centered">
        <p className="textBold has-text-centered">To create a unique experience 
      it is always a key task to understand the needs of your users. Let’s face this challenge!</p>
      </div>
    </section>
  )
}

export default WhatIDo