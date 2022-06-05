import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new-product">New product</Link>
    </nav>
  )
}

export default Navbar;