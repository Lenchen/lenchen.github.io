import React from 'react'
import Line from './line.js'
import styles from './btw.module.scss'

const Btw = () => {
  return (
    <section class="has-text-centered is-centered has-max-width">
      <h2>And By The Way</h2>
      <Line center variant="md" />
      <p className="margin-md">I designed and coded this website by my own 
      so I have some background knowledge there too.
      </p>
    </section>
  )
}

export default Btw
