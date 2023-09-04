import styles from './header.module.css'
import title from './../../images/Icons/дитячий театр.png'
import title_img from './../../images/Icons/“Світанок”.png'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div>
            <img src={title} alt="children_theater" />
          </div>
          <div>
            <img src={title_img} alt="Svitanok" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
