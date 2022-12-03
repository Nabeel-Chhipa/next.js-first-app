import Head from 'next/head'
import About from "./about"

const Blog = () => {
  return (
    <>
    <Head>
        <title>Blog</title>
        <meta name="description" content="Next.js Blog page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/* <About /> */}
    <div className="title">Blog Page</div>
    </>
  )
}

export default Blog