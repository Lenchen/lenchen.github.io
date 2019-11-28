import React from 'react'
import Line from '../components/line'
import styles from "./whatIdo.module.scss"

const WhatIDo = () => {
  return (
    <section className="is-centered has-max-width">
      <div className="margin-lg">
        <h2>What I Do</h2>
        <Line variant="md" />
        <p><span className="textBold">Every project is different and needs different solutions.</span> <br />
            I help you figuering out which approach is best for your business and accompany 
            you through the whole process.
        </p>
      </div>
      <div className="margin-xl">
        <div className="margin-lg has-margin-xs-075">
          <div className="columns">
            <div className="column has-margin-xs-15">
              <h4>User Research</h4>
              <Line variant="sm" />
              <p className="margin-sm">To understand exactly which user needs you should fulfill.</p>
              <div className={styles.tags}>
                <div className={styles.tag}>Personas</div>
                <div className={styles.tag}>Customer Journeys</div>
                <div className={styles.tag}>Focus Groups</div>
                <div className={styles.tag}>User Surveys</div>
                <div className={styles.tag}>Mental Models</div>
                <div className={styles.tag}>...</div>
              </div>
            </div>
            <div className="column has-margin-xs-15">
              <h4>Analysis &amp; Strategy</h4>
              <Line variant="sm" />
              <p className="margin-sm">To identify potentials and find the best ways to unfold them.</p>
              <div className={styles.tags}>
                <div className={styles.tag}>Usability Audits</div>
                <div className={styles.tag}>Cognitive Walkthroughs</div>
                <div className={styles.tag}>Benchmarking</div>
                <div className={styles.tag}>Information Architectures</div>
                <div className={styles.tag}>Navigation Concepts</div>
                <div className={styles.tag}>Flow Charts</div>
                <div className={styles.tag}>...</div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column has-margin-xs-15">
            <h4>Wireframing &amp; Prototyping</h4>
            <Line variant="sm" />
            <p className="margin-sm">To focus on a simple and intuitive experience.</p>
              <div className={styles.tags}>
                <div className={styles.tag}>Low &amp; High Fidelty</div>
                <div className={styles.tag}>Interactive</div>
                <div className={styles.tag}>Responsive</div>
                <div className={styles.tag}>Mobile First</div>
                <div className={styles.tag}>Rapid</div>
                <div className={styles.tag}>...</div>
              </div>
          </div>
          <div className="column">
            <h4>Testing &amp; Iteration</h4>
            <Line variant="sm" />
            <p className="margin-sm">To constantly improve your user flows and never get loose of track.</p>
            <div className={styles.tags}>
            <div className={styles.tag}>Test Roadmaps</div>
              <div className={styles.tag}>User Interviews</div>
              <div className={styles.tag}>Usability Tests</div>
              <div className={styles.tag}>Data Evaluation</div>
              <div className={styles.tag}>...</div>
            </div>          
          </div>
        </div>
      </div>
      {/* <div className="has-text-centered">
        <p className="textBold has-text-centered">To create a unique experience 
      it is always a key task to understand the needs of your users. Let’s face this challenge!</p>
      </div> */}
    </section>
  )
}

export default WhatIDo