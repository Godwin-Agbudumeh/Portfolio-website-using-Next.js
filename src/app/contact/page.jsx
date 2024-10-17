import React from 'react'
import Image from "next/image";
import contactImage from '../../../public/contactImage.png';
import styles from './page.module.css'
//@ alias navigates us to root directory. For root directory src only
import Button from '@/components/Button/Button'

export default function Contact() {
  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
            src={contactImage}
            alt=""
            // fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder='message'
            cols='28'
            rows='10'
          ></textarea>
          <div className={styles.button}><Button url="#" text="Send"/></div>
        </form>
      </div>
    </div>
  )
}
