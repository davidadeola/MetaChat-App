import Image from 'next/image'

import { useMoralis } from 'react-moralis'

import styles from '../../../styles/profile.module.css'

import profilePic from '../../../public/profilePic.jpeg'

import ChangeUsername from '../../ChangeUsername'
import Avatar from '../../Avatar'

function Profile() {
  const { user, logout } = useMoralis()
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.profilePic}>
          <Image layout="fill" src={profilePic} />
        </div>
        <h2 className={styles.username}>{user.getUsername()}</h2>
        <ChangeUsername />
      </div>
    </>
  )
}

export default Profile
