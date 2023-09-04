import styles from './production_of.module.css'

const Production_of = ({ text1, text2, img1, img2 }) => {
  return (
    <div className={styles.production_of}>
      <div className={styles.production_block_top}>
        <div className={styles.production_img}>
          <img src={img1} alt="" />
        </div>
        <div className={styles.production_text}>{text1}</div>
      </div>
      <div className={styles.production_block_bottom}>
        <div className={styles.production_img}>
          <img src={img2} alt="" />
        </div>
        <div className={styles.production_text}>{text2}</div>
      </div>
    </div>
  )
}

export default Production_of
