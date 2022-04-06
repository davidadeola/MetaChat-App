import Image from 'next/image';
import { useMoralis } from 'react-moralis';

import ChangeUsername from './ChaneUsername';
import profilePic from '../public/profilePic.jpeg';
import Avatar from './Avatar'

function Header() {
  const { user } = useMoralis()

  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-red-400 border-b-2 border-red-400">
      <div className="grid-colss-5 grid items-end lg:grid-cols-6 lg:items-center">
        <div className="relative mx-auto hidden h-24 w-24 lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src={profilePic}
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 rounded-full border-8 border-red-400 lg:mx-auto">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">Welcome to Meta-Chat</h1>
          <h2 className="truncate text-5xl font-bold">{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  )
}

export default Header;