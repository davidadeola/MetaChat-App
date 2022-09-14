import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'

import Nav from './Nav'

import { Warning } from './Icon'
import MetaMaskLogo from '../public/metamaskLogo.png'

import style from '../styles/login.module.css'

function Login() {
  const { authenticate } = useMoralis()
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../public/chat-animation.json'),
    })
  }, [])

  return (
    <div className={style.loginContainer}>
      <div className={style.heroContainer}>
        <div className={style.heroLeft}>
          <div className={style.note}>
            <Warning width={20} height={20} color="#545B69" />
            <p className={style.noteText}>
              NOTE: In order to use the MetaChat App, you must have Metamask
              installed as a Chrome Extension.
            </p>
          </div>
          <h1 className={style.heroText}>
            Introducing <span className={style.metachat}>MetaChat</span> - A
            Decentralized Chat-based system
          </h1>

          <button
            className={style.connectButton}
            onClick={() => authenticate()}
          >
            Connect Wallet
          </button>

          <button className={style.metamask}>
            <span className={style.metalogo}>
              <Image src={MetaMaskLogo} width={15} height={15} />
            </span>
            Download Metamask
          </button>
        </div>
        <div className={style.heroRight} ref={container}></div>
      </div>
    </div>
  )
}

export default Login
