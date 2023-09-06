import { useEffect } from 'react'
import { useLocalStorage } from '../../../utils/useLocalStorage'
import sun from './../../../images/Icons/sun.svg'
import moon from './../../../images/Icons/moon.svg'
import styles from './buttonDarkMode.module.css'

const detectDarkMode = () => {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }
  return 'light'
}

const ButtonDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? 'dark' : 'light'
        setDarkMode(newColorScheme)
      })
  }, [setDarkMode])

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }

  const btnNormal = styles.dark_mode_btn
  const btnActive = `${styles.dark_mode_btn} ${styles.dark_mode_btn__active}`

  return (
    <button
      className={darkMode === 'light' ? btnNormal : btnActive}
      onClick={toggleDarkMode}
    >
      <img src={sun} alt="Light mode" className={styles.dark_mode_btn__icon} />
      <img src={moon} alt="Dark mode" className={styles.dark_mode_btn__icon} />
    </button>
  )
}

export default ButtonDarkMode
