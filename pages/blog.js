import Head from 'next/head'
// import About from "./about"
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <>
    <Head>
        <title>Blog</title>
        <meta name="description" content="Next.js Blog page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/* <About /> */}
    <div className={styles.blogs}>
          <div className='blogItem'>
            <Link href='/blogpost/First Blog'>
              <h3>First Blog</h3>
            </Link>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className='blogItem'>
            <Link href='/blogpost/Second Blog'>
              <h3>Second Blog</h3>
            </Link>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className='blogItem'>
            <Link href='/blogpost/Third Blog'>
              <h3>Third Blog</h3>
            </Link>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
    </>
  )
}

export default Blog