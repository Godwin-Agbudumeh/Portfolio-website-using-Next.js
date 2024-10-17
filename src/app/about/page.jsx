import React from 'react'
import styles from './page.module.css'
import {items} from '../../AboutContentData/data.js';
import {notFound} from "next/navigation";

const getData = ()=>{
    const data = items[0];
  
    if(data){
     return data;
    }
  
    return notFound();
  }

export default function Contact() {
  const data = getData();
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.content}>
            <p>{data.desc}</p>
        </div>
    </div>
  )
}