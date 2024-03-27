import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Cart = () => (
  <>
    <Header />
    <div className="cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
        alt="cart"
        className="cart-img"
      />
      <Link to="/products">
        <button type="button" className="button">
          Shop Now
        </button>
      </Link>
    </div>
  </>
)

export default Cart
