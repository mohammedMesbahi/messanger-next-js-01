import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.mainSection}>
            <section class={styles.container1}>
                <h1>
                    Hangout <br/>
                    anytime
                    anywere
                </h1>
                <span>Messanger makes it easy and fun to stay close to your favorite peaple</span>
                <form action="/users/login" className={styles.mainform}>
                    <div class="inputs">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <div class={styles.actions}>
                        <button type="submit">Log in</button>
                        <a href="/forgotPassword">forgotten your password</a>
                    </div>
                </form>
            </section>
            <section class={styles.container2}>
                <div class={styles.mainPicture}>
                    <img src="/images/mainImage.png" alt="mainImage" className={styles.imgHome}/>
                </div>
            </section>
        </main>
    </>
  )
}