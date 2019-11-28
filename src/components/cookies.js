import React from 'react';
import styles from './cookies.module.scss'

const Cookies = () => {
  return (
    <div className={styles.cookiebanner}>
      <div className="is-flex has-full-height">
      <p className={`is-centered is-hidden-mobile ${styles.cookietext}`}>This site uses cookies to learn what can be improved to provide you with a great experience. 📈🎉 
        <br />If you continue surfing the site, you agree to the <a href="#" className="is-underlined">use of cookies</a>. <a href="#" className="is-underlined">I agree</a>.
      </p>
      <p className={`is-centered is-hidden-tablet ${styles.cookietext}`}>This site uses cookies to learn and provide you with a great experience. 📈🎉 
        <br />If you continue surfing the site, you agree to the <a href="#" className="is-underlined">use of cookies</a>. <a href="#" className="is-underlined">I agree</a>.
      </p>
      
      <button className={`button ${styles.cookiebutton}`}><i className="fas fa-times"></i></button>
      </div>
    </div>
  )
}

export default Cookies