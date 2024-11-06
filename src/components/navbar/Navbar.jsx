"use client"
import React, {useContext} from 'react';
import Link from 'next/link';
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import {ThemeContext} from "@/context/ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [menuDisplay, setMenuDisplay] = React.useState(false);

  const handleMenuClick = ()=>{
    setMenuDisplay(!menuDisplay);
  }

  const { mode } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <div className={styles.leftNavbar}>
        <Link href="/">
          <span className={styles.siteTitle}>Godwin Agbudumeh</span>
          {/* <span className={styles.siteTitleTwo}>Portfolio</span> */}
        </Link>
      </div>
      <DarkModeToggle />
      <div className={styles.rightNavbar}>
        <ul className={styles.list}>
          <li className={styles.item}><Link href="/">Home</Link></li>
          <li className={styles.item}><Link href="/contact">Contact</Link></li>
          <li className={styles.item}><Link href="/about">About</Link></li>
        </ul>
      </div>
      <div className={styles.mobileMenuDiv}>
        <FontAwesomeIcon icon={faBars} className="fa-solid" onClick={handleMenuClick}/>
      </div>
      {
        menuDisplay && (
          <div className={mode==='light' ? styles.mobileMenuLight : styles.mobileMenu}>
            <ul className={styles.mobileList}>
              <li className={styles.mobileItem}><Link href="/">Home</Link></li>
              <li className={styles.mobileItem}><Link href="/contact">Contact</Link></li>
              <li className={styles.mobileItem}><Link href="/about">About</Link></li>
            </ul>
          </div>
        )
      }
      <div className={styles.navbarLine}></div>
    </div>
  )
}
