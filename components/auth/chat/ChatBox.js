// import { userInfo } from 'os';
import Message from './Message'
import { useRef } from 'react'
import SendMessage from './SendMessage'
import { useMoralis, useMoralisQuery } from 'react-moralis'
import styles from '../../../styles/chatBox.module.css'

const MINS_DURATION = 15

function ChatBox() {
  const { user } = useMoralis()
  const endOfMessagesRef = useRef(null)
  const { data, loading, error } = useMoralisQuery(
    'Messages',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan(
          'createdAt',
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  )

  return (
    <div className={styles.chatBox}>
      <h3>This chat has been encrypted</h3>

      <div className={styles.chatArea}>
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <SendMessage endOfMessagesRef={endOfMessagesRef} />
    </div>
  )
}

export default ChatBox
