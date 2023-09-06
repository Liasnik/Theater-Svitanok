import { useState } from 'react'
import './mobile_nav.scss'

const MobileNav = () => {
  const [isOpenNav, setIsOpenNav] = useState(false)

  const closedNavButton = 'nav-icon'
  const openedNavButton = 'nav-icon nav-icon--active'

  const closedMobileMenu = 'mobile-nav'
  const openedMobileMenu = 'mobile-nav mobile-nav--open'

  function openNav() {
    setIsOpenNav(isOpenNav ? false : true)
  }

  return (
    <div>
      <div className="nav__icon">
        <button onClick={openNav} className="mobile-nav-btn ">
          <div class={isOpenNav ? openedNavButton : closedNavButton}></div>
        </button>
      </div>
      <div className={isOpenNav ? openedMobileMenu : closedMobileMenu}>
        <ul className="mobile-nav__list">
          <li>
            <a href="#!" className="active">
              Домашня
            </a>
          </li>
          <li>
            <a href="#!">О Театрі</a>
          </li>
          <li>
            <a href="#!">Вистави</a>
          </li>
          <li>
            <a href="#!">Записатись на курс</a>
          </li>
          <li>
            <a href="#!">Контакти</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav
