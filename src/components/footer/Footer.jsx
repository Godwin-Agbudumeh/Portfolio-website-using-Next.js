"use client"
import React from 'react'
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footerLine}></div>
      <div className={styles.content}>
        <span>©2024 Godwin Portfolio Website. </span>
        <span>All rights reserved.</span>
      </div>
    </div>
  )
}

