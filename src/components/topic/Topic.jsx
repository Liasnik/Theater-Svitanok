import React from 'react'
import styles from './topic.module.css'

const Topic = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.repetitions_include}>{title}</h3>
    </div>
  )
}

export default Topic
