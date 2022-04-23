import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Instructions } from "../components/Instructions/Instructions";
import { Navbar } from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>subcat</title>
        <meta name="description" content="subcat home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-10">
        <div className="flex flex-col items-center">
          <Navbar />
          <Header />
        </div>
        <Instructions />
      </div>
      <div className="bg-terciary-color -mt-40 lg:-mt-24 min-h-[100vh]">a</div>
    </div>
  );
};

export default Home;
