// import React from 'react'
import {useState} from 'react'
import styles from './NavBar.module.css'

export default function NavBar() {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarLeft}>React Application Header</div>
        <div className={styles.navbarRight}>
          <div className={styles.normalNavRight}>
            <a href='/products'>Products</a>
            <span> | </span>
            <a href='/login'>Login</a>
            <span> | </span>
            <a href='/contactUs'>Contact Us</a>
          </div>
          <div className={styles.responsiveNavRight}>
            <button onClick={()=>{
              setMenu(!menu);
            }}>Menu</button>
          </div>
        </div>
      </div>

      {menu? (

        <div className={styles.menuList}>
          <ul>
            <li><a href='/products'>Products</a></li>
            <li><a href='/login'>Login</a></li>
            <li><a href='/aboutUs'>About Us</a></li>
          </ul>
        </div>

      ):null}

    </>
  )
}