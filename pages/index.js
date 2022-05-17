import Head from 'next/head';
import Login from '../components/Login';
import Header from '../components/Header';
import Messages from '../components/Messages';
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-blue-500 overflow-hidden">
      <Head>
        <title>Metaverse Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-screen-2xl">
        <Header />
        <Messages />
      </div>

      <main classname="max-w-7xl mx-auto px-8 sm:px-16">
        <section classname="pt-6">
          <h2 classname="text-4xl font-semibold pb-5"></h2>
        </section>
      </main>
    </div>
  )
}
