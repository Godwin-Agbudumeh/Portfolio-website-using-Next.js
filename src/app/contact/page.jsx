"use client"
import React, {useState} from 'react'
import Image from "next/image";
import ContactImage from '../../../public/contactImage.png';
import styles from './page.module.css'
import emailjs from '@emailjs/browser';


export default function Contact() {
  const[emailSuccess, setEmailSuccess] = useState(false);
  const[emailError, setEmailError] = useState(false);
  const[isFetching, setIsFetching] = useState(false);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e)=>{
    setInputs((prev)=>{return ({...prev, [e.target.name]:e.target.value})});
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setIsFetching(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try{
      const templateParams = {
        from_name: inputs.email,
        to_name: "Godwin",
        message: inputs.message
      };

      const res = await emailjs.send(serviceID, templateID, templateParams, userID);

      if(res.status === 200){
        setEmailSuccess(true);
        setIsFetching(false);
      }
    }catch(err){
      setEmailError(true);
      setIsFetching(false);
    }
  }
  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
            src={ContactImage}
            alt=""
            className={styles.image}
          />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input required type="text" placeholder="name" name="name" className={styles.input} onChange={handleChange}/>
          <input required type="email" placeholder="email" name="email" className={styles.input} onChange={handleChange}/>
          <textarea
            required
            className={styles.textArea}
            placeholder='message'
            name='message'
            cols='28'
            rows='10'
            onChange={handleChange}
          ></textarea>
          <button type="submit" disabled={isFetching} className={styles.button}>Send</button>
          {emailSuccess && (<div className={styles.successMessage}>Message sent successfully</div>)}
          {emailError && (<div className={styles.errorMessage}>Message failed to send</div>)}
        </form>
      </div>
    </div>
  )
}
