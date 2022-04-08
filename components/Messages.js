import { userInfo } from 'os';
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis';

function Messages() {
    const { user } = useMoralis();
  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginleft: 'auto', marginRight: 'auto' }}
        />
      </div>
      <div>
          <h1> This is the new message</h1>
      </div>

      <div>
          {/* Send Message */}
      </div>

      <div>
          {/* Reply Message */}
      </div>
      <div className="text-center text-gray-400 mt-5">
          <p>You're up to date {user.getUsername()}! </p>
          <p>New paragraph</p>
      </div>
    </div>
  )
}

export default Messages;
