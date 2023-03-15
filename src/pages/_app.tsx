import { type AppType } from "next/dist/shared/lib/utils";
import { Toaster } from "react-hot-toast";
import { MoralisProvider } from "react-moralis";
import { SSRProvider } from "react-aria";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MoralisProvider initializeOnMount={false}>
      <SSRProvider>
        <Toaster />
        <Component {...pageProps} />
      </SSRProvider>
    </MoralisProvider>
  );
};

export default MyApp;
