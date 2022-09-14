import { useMoralis } from 'react-moralis'
import TimeAgo from 'timeago-react'
import Avatar from '../../Avatar'
import styles from '../../../styles/message.module.css'

function Message({ message }) {
  const { user } = useMoralis()

  const isUserMessage = message.get('ethAddress') === user.get('ethAddress')

  return (
    <div className={styles.messageContainer}>
      <div className={styles.avatar}>
        <Avatar username={message.get('username')} />
      </div>
      <div className={styles.message}>
        <div className={styles.messageText}>
          <div>{message.get('message')}</div>
        </div>
        <div className={styles.messageInfo}>
          <TimeAgo datetime={message.createdAt} />
          {' • '}
          <span>{message.get('username')}</span>
        </div>
      </div>
    </div>
  )
}

export default Message
