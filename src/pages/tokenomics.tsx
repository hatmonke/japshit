import Head from "next/head";
import Tokenomics from "@views/Tokenomics";
import Layout from "@layouts/Layout";

function TokenomicsPage() {
  return (
    <Layout>
      <Head>
        <title>Jap</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tokenomics />
    </Layout>
  );
}

export default TokenomicsPage;
