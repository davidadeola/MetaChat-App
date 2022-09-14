import { useMoralis } from 'react-moralis'

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis()

  const setUsername = () => {
    const username = prompt(
      `Enter your new Username (current: ${user.getUsername()})`
    )

    if (!username) return

    setUserData({
      username,
    })
  }
  return (
    <>
      <button disabled={isUserUpdating} onClick={setUsername}>
        Change your Username
      </button>
    </>
  )
}

export default ChangeUsername
