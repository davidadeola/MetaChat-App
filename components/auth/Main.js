import ChatBox from './chat/ChatBox'
import Profile from './profile/Profile'

import baseStyles from '../../styles/base.module.css'
import styles from '../../styles/main.module.css'
import { Moralis } from '../Icon'

function Main() {
  return (
    <>
      <main>
        <div className={baseStyles.container + ' ' + styles.container}>
          <Profile />
          <ChatBox />
        </div>
      </main>
    </>
  )
}

export default Main
