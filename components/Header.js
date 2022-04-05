import { useMoralis } from 'react-moralis'

function Header() {
    const { user } = useMoralis();

  return (
    <div>
    <h1>The Header section</h1>
    </div>
  )
}

export default Header;