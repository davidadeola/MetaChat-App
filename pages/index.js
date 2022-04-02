import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-sreen">
      <Head>
        <title>Metaverse Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='max-w-screen'></div>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
