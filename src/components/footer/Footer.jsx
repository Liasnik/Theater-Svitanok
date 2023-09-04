import styles from './footer.module.css'
import logo from './../../images/Icons/masks.svg'
import Telegram from './../../images/Icons/telrgram.svg'
import Instagram from './../../images/Icons/Instagram.svg'
import YouTube from './../../images/Icons/YouTube.svg'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <h3>Приєднуйся до нас</h3>
        </div>
        <div className={styles.middle}>
          <h3>м. Донецьк, бульвар Шевченка 15</h3>
          <div className={styles.social}>
            <img src={Telegram} alt="" />
            <img src={Instagram} alt="" />
            <img src={YouTube} alt="" />
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.email}>театр@gmail.com</p>

          <p className={styles.phone}>+380 333 30 03</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
