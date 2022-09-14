import Link from 'next/link'
import { useMoralis } from 'react-moralis'

import styles from '../styles/nav.module.css'
import baseStyles from '../styles/base.module.css'

import { MetaMaskLogo, Online } from './Icon'
import { useState } from 'react'

const Nav = () => {
  const { authenticate, isAuthenticated } = useMoralis()
  const [buttonVisible, setButtonVisible] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={baseStyles.container + ' ' + styles.container}>
        <h2 className={styles.header}>
          <Link href="/">MetaChat</Link>
        </h2>
        <div className={styles.control}>
          {isAuthenticated ? (
            <>
              <div>
                <Online />
                Connected
              </div>
              <button
                className={styles.button}
                onClick={() => setButtonVisible(!buttonVisible)}
              >
                <span>0xda7f...0gea</span>
                <span>
                  <MetaMaskLogo />
                </span>
              </button>
              {buttonVisible && (
                <div className={styles.disconnect}>
                  <button onClick={() => authenticate()}>
                    Disconnect Wallet
                  </button>
                </div>
              )}
            </>
          ) : (
            <button
              className={styles.connectButton}
              onClick={() => authenticate()}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
