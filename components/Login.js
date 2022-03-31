import Image from 'next/image';
import background from '../public/background.jpg';
import ProfilePic from '../public/ProfilePic.jpg';
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate } = useMoralis();

  return (
    <div className="relative bg-black text-white">
      <h1>Login screen</h1>
      <div
        className="absolute z-50 flex h-4/6 w-full flex-col items-center 
        justify-center space-y-4"
      >
        <Image
          className="rounded-full object-cover"
          src={ProfilePic}
          height={200}
          width={200}
        />

        <button
          onClick={() => authenticate()}
          className="animate-pulse rounded-lg bg-red-500 p-3 font-bold"
        >
          Login to MetaChat
        </button>
      </div>
      <div className="h-screen w-full">
        <Image src={background} layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

export default Login