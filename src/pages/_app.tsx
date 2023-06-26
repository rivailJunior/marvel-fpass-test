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
      <div className="w-full bg-gray-50">
        <div className="flex justify-center p-5">
          <div className="max-w-6xl ">
            <Component {...pageProps} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default api.withTRPC(MyApp);
