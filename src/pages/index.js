import React from "react"
import { Helmet } from "react-helmet"
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
        <title>UX Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Helmet>
    <Header />
    <Hero />
    <Personal />
    <WhatIDo />
    <GetInTouch />
    <Btw />
    <Footer />
</div>
)