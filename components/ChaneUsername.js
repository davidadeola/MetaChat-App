import { useMoralis } from 'react-moralis';

function ChaneUsername() {
    const { setUserData, isUserUpdating, userError, user } = useMoralis();

    const setUsername = () => {
        const username = prompt(
          `Enter your new Username (current: ${user.getUsername()})`
        );

        if (!username) return;

        setUserData({
            username,
        })
    };
  return (
    <div className="absolute top-5 right-8 text-sm">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-red-700"
      >
        Change your Username
      </button>
    </div>
  )
}

export default ChaneUsername;