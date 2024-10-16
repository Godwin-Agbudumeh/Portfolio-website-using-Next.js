"use client"
import React, {useContext} from 'react'
import styles from './darkModeToggle.module.css';
import {ThemeContext} from "@/context/ThemeContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

export default function DarkModeToggle() {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.moonIcon}><FontAwesomeIcon icon={faMoon}/></div>
        <div className={styles.sunIcon}><FontAwesomeIcon icon={faSun}/></div>
        <div 
        className={styles.ball} 
        style={mode === "light" ? {left:"2px"} : {right:"2px"}}
      /> 
    </div>
  )
}


