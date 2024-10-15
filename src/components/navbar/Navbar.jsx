"use client"
import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [menuDisplay, setMenuDisplay] = React.useState(false);

  const handleMenuClick = ()=>{
    setMenuDisplay(!menuDisplay);
  }
  return (
    <div className={styles.container}>
      <div className={styles.leftNavbar}>
        <Link href="/">Godwin Portfolio</Link>
      </div>
      <DarkModeToggle />
      <div className={styles.rightNavbar}>
        <ul className={styles.list}>
          <li className={styles.item}>Home</li>
          <li className={styles.item}>Contact</li>
          <li className={styles.item}>About</li>
        </ul>
      </div>
      <div className={styles.mobileMenuDiv}>
        <FontAwesomeIcon icon={faBars} className="fa-solid" onClick={handleMenuClick}/>
      </div>
      {
        menuDisplay && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileList}>
              <li className={styles.mobileItem}>Home</li>
              <li className={styles.mobileItem}>Contact</li>
              <li className={styles.mobileItem}>About</li>
            </ul>
        </div>
        )
      }
    </div>
  )
}
