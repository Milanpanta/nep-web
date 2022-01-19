import Head from "next/head";
import { HomePage } from "../components/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Neptune Mutual</title>
        <meta name="description" content="Neptune Mutual" />
        <link rel="icon" href="/favicon.ico" />
        <HomePage />
      </Head>
    </div>
  );
}
