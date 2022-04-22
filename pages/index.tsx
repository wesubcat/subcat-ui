import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header/Header";
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
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Home;
