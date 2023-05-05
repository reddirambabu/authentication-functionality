// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <Link className="nav-link" to="/">
      Home
    </Link>
    <Link className="nav-link" to="/about">
      About
    </Link>
  </nav>
)

export default Header
