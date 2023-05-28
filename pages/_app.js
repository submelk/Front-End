// import Layout from '../components/layout'
import Head from "next/head";

import Layout from "../components/layout";

// import "reset-css";
import "../styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import WindowWrapper from "../components/window-wrapper";

// If loading a variable font, you don't need to specify the font weight
// const poppins = Poppins({ subsets: ["latin"] });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SubMelk</title>
        {/* <link rel="icon" href="/img/img_full_logo.svg" /> */}
      </Head>

      <WindowWrapper>
        <Layout>
          <QueryClientProvider client={queryClient}>
            <main>
              <Component {...pageProps} />
            </main>
          </QueryClientProvider>
        </Layout>
      </WindowWrapper>

      {/* <style jsx>
        .container {
          
        } */}
      {/* </style> */}
    </>
  );
}
