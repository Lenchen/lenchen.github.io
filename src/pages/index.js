import React from "react"
import { Helmet } from "react-helmet"
import Cookies from '../components/cookies'
import Header from '../components/header'
import Hero from '../components/hero'
import Personal from '../components/personal'
import WhatIDo from '../components/whatIdo'
import GetInTouch from '../components/getintouch'
import Btw from '../components/btw'
import Footer from '../components/footer'



export default () => (
<div className="application">
    <Helmet>
        <title>Lena Demski UX Design &amp; Consulting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <script src="https://kit.fontawesome.com/37a2a9b871.js" crossorigin="anonymous"></script>
    </Helmet>
    <Cookies />
    <Header />
    <div className="has-xs-body-margin">
      <Hero />
      <Personal />
      <WhatIDo />
      <GetInTouch />
      <Btw />
    </div>
    <Footer />
</div>
)