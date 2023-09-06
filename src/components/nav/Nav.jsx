import styles from './nav.module.css'
import logo from './../../images/Icons/masks.svg'
import ButtonDarkMode from './button_dark_mode/ButtonDarkMode'

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
          <ButtonDarkMode />
        </div>
      </div>
    </div>
  )
}

export default Nav
