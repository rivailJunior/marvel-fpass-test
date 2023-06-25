import { type AppType } from "next/app";
import { api } from "y/utils/api";
import "y/styles/globals.css";
import { Header, Footer } from "y/components";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Marvel</title>
        <meta name="description" content="Fpass test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-gray-50 pt-10">
        <div className="flex min-w-full content-center items-center justify-center p-5">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default api.withTRPC(MyApp);
