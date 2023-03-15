import Head from "next/head";
import Home from "@views/Home";
import Layout from "@layouts/Layout";

function HomePage() {

  return (
    <Layout>
      <Head>
        <title>Jap</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </Layout>
  );
}

export default HomePage;
