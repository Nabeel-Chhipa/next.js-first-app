import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Next.js Blog home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src='/src.js' strategy='lazyOnload'></Script> */}

      {/* <nav className={styles.mainNav}>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav> */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js first app
        </h1>
        <div className={styles.imageWrapper}>
          <Image src='/banner.jpg' alt='banner-image' width={600} height={350} />
        </div>
        <div className='blogs'>
          <div className='blogItem'>
            <h3>First Blog</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className='blogItem'>
            <h3>Second Blog</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className='blogItem'>
            <h3>Third Blog</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
