import Head from "next/head";
import About from "@views/About";
import Layout from "@layouts/Layout";

function AboutPage() {

  return (
    <Layout>
      <Head>
        <title>Jap</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </Layout>
  );
}

export default AboutPage;
