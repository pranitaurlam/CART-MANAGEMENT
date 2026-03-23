import { Link } from 'react-router-dom'

function NavBar({ cartCount }) {
  return (
    <nav>
      <Link to='/'>LOGO</Link>
      <Link to='/cart' className='nav-cart-link'>
        CART 🛒
        {cartCount > 0 && <span className='cart-badge'>{cartCount}</span>}
      </Link>
    </nav>
  )
}

export default NavBar
