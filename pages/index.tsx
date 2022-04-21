import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>subcat</title>
        <meta name="description" content="subcat home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
        <div className="flex flex-col items-center">
          <Navbar />
          <div>
            <h1 className="text-8xl text-strong-brown self-start">🐱subcat</h1>
            <h2 className="text-5xl">
              nft comissions from your favorite artists.
            </h2>
            <p className="text-sm">
              get in early: subscribe to kno when we launch
            </p>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
