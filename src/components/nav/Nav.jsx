import styles from './nav.module.css'
import logo from './../../images/Icons/masks.svg'

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.menu}>
          <span>UA / ENG</span>

          <button className={styles.sign_up}>Записатись на курс</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
