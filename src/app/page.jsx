import Image from "next/image";
import styles from "./page.module.css";
import Button from '@/components/Button/Button';
import {items} from '../HomeContentData/data.js';
import {notFound} from "next/navigation";

const getData = ()=>{
  const data = items;

  if(data){
   return data;
  }

  return notFound();
}

export default function Home() {
  const data = getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.portfolioHeading}>My latest works</h1>
      {
        data.map((item)=>(
          <div className={styles.item} key={item.id}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                src={item.img}
              />
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.desc}>{item.desc}</p>
              <div className={styles.button}>
                <Button text="Visit Site" url={item.url}/>
                <Button text="View Github Source Code" url={item.gitUrl}/>
              </div>
            </div>
          </div>
        ))
      }   
    </div>
  );
}
