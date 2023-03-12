import Head from "next/head"
import Header from "components/Header"
import Main from "components/Main"
import Footer from "components/Footer"
import styles from '@/styles/Home.module.css'

 const homepoage = () => {
    return ( 
        <>
        <Head>
             <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"/>
        </Head>
            <header className={styles.header}>
            <Header/>
            </header>
            <main className={styles.main}>
             <Main/>
             </main>
             <footer className={styles.footer}>
             <Footer/>
             </footer>
        </>
     );
 }
  
 export default homepoage;