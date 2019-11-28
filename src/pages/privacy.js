import React from "react"
import { Helmet } from "react-helmet"
import Header from '../components/header'
import Footer from '../components/footer'

export default () => (
  <div className="application">
      <Helmet>
          <title>UX Design</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <script src="https://kit.fontawesome.com/37a2a9b871.js" crossorigin="anonymous"></script>
      </Helmet>
      <Header />
      <div className="has-xs-body-margin has-max-width is-centered">
        <div className="margin-lg">
          <a href="#index">
            <span className="icon"><i className="fas fa-arrow-left"></i></span> 
            Lena Demski - UX Design &amp; Consulting</a>
        </div>
      </div>
      <Footer />
  </div>
  )