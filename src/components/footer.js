import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    // <footer>
    //   <div className={`margin-sm ${styles.footerIcon}`}>🌈</div>
    //   <div className="margin-sm"><a href="#imprint" className={styles.footerLink}>Imprint</a></div>
    //   <div>&copy; 2019 Lena Demski</div>
    // </footer>
    // <footer>
    //   <div className="columns">
    //     <div className="column is-one-fith is-vcentered">&copy; 2019 Lena Demski</div>
    //     <div className={`column is-three-fiths is-vcentered ${styles.footerIcon}`}>🌈</div>
    //     <div className="column is-one-fith is-vcentered">
    //       <a href="#" className={styles.footerLink, styles.firstfooterlink}>Privacy</a>
    //       <a href="#" className={styles.footerLink}>Imprint</a>
    //     </div>
    //   </div>
    // </footer>
    <footer>
      <div className="columns is-centered is-mobile has-max-width">
        <div className={`column ${styles.copyright}`}>
          <span className={styles.footerIcon}>🌈</span><span>Copyright 2019</span>
        </div>
        <div className={`column ${styles.footerLinks}`}>
          <a href="#" className={`${styles.footerLink} ${styles.firstfooterlink}`}>Privacy</a>
          <a href="#" className={styles.footerLink}>Imprint</a> 
        </div>

      </div>
    </footer>
  )
}

export default Footer