import React from "react"
import styles from './logobox.module.scss'
import mop from '../../static/mop.svg'
import douglas from '../../static/douglas.svg'
import soliver from '../../static/soliver.svg'
import weber from '../../static/weber.svg'
import axa from '../../static/axa.svg'
import ph from '../../static/paulhewitt_plain.svg'
import recolution from '../../static/recolution_plain.svg'
import demv from '../../static/demv.svg'

const Logobox = () => {
    return (
        <div className={styles.logobox}>
            <div className="columns is-vcentered is-mobile has-flex-wrap">
                <div className="column is-font-size-0 is-half-mobile has-padding-175"><img src={mop} alt="logo Marc O Polo" /></div>
                <div className="column is-font-size-0 is-half-mobile has-padding-175"><img src={douglas} alt="logo Douglas" /></div>
                <div className="column is-font-size-0 is-half-mobile has-padding-175"><img src={recolution} alt="logo Recolution" /></div>
                <div className="column is-font-size-0 is-half-mobile has-padding-175"><img src={ph} alt="logo Paul Hewitt" /></div>
                <div className="column is-font-size-0 is-half-mobile has-padding-175"><img src={axa} alt="logo Axa" /></div>
                <div className="column is-font-size-0 is-half-mobile has-padding-175"><img src={weber} alt="logo Weber Grill" /></div>
                <div className="column is-font-size-0 is-half-mobile has-padding-175"><img src= {soliver} alt="logo sOliver" /></div>
                <div className="column is-font-size-0 is-half-mobile has-padding-175 is-hidden-tablet is-hidden-desktop"><img src= {demv} alt="logo Deutscher Maklerverbund" /></div>
            </div>
        </div>
    )   
}

export default Logobox