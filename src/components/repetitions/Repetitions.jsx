import React from 'react'
import styles from './repetitions.module.css'
import Button from '../button/Button'

const Repetitions = ({ topic, text, img, img2, button_title }) => {
  return (
    <div className={styles.repetitions}>
      <div className={styles.description_training_block}>
        {img && (
          <div className={styles.image}>
            <img src={img.img} alt={img.alt} />
          </div>
        )}
        <div
          className={styles.description}
          style={img && { justifyItems: 'right' }}
        >
          <div className={styles.text}>
            {topic && <p>{topic}</p>}
            <p>{text}</p>
          </div>
          <div className={styles.button}>
            <Button title={button_title} />
          </div>
        </div>
        {img2 && (
          <div className={styles.image}>
            <img src={img2.img} alt={img2.alt} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Repetitions
