import Image from 'next/image';
import { useMoralis } from 'react-moralis';

import profilePic from '../public/profilePic.jpeg';
import Avatar from './Avatar'

function Header() {
    const { user } = useMoralis();

  return (
    <div>
      <div className="">
        <div className="relative mx-auto hidden h-24 w-24 lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src={profilePic}
          />
        </div>
        <div>
          <div>
            <Avatar logoutOnPress />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;