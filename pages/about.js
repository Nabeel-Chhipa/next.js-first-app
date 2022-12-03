import Head from 'next/head'

const About = () => {
  return (
    <>
    <Head>
        <title>About</title>
        <meta name="description" content="Next.js Blog about page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>
        {`
          .title {
            background-color: #fff;
            color: #000;
            padding: 10px;
            margin: 10px
            }
          `}
      </style>
      <div className="title">about page</div>
    </>
  );
};

export default About;
