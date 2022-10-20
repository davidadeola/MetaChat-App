import { useState } from 'react'
import { useMoralis } from 'react-moralis'
import { Send } from '../../Icon'

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis()
  const [message, setMessage] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()

    if (!message) return

    const Messages = Moralis.Object.extend('Messages')
    const messages = new Messages()

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message)
        }
      )

    endOfMessagesRef?.current?.scrollIntoView({ behaviour: 'smooth' })

    setMessage('')
  }

  return (
    <form>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button onClick={sendMessage}>
        <Send /> Send
      </button>
    </form>
  )
}

export default SendMessage
