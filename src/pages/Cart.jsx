import { Link } from 'react-router-dom'

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cartItems.length === 0) {
    return (
      <div className='cart-empty'>
        <p>Your cart is empty.</p>
        <Link to='/' className='btn-back'>← Back to Products</Link>
      </div>
    )
  }

  return (
    <div className='cart'>
      <h1>Your Cart</h1>
      <div className='cart-list'>
        {cartItems.map((item) => (
          <div key={item.id} className='cart-item'>
            <img src={item.thumbnail} alt={item.title} className='cart-item-img' />
            <div className='cart-item-info'>
              <h2>{item.title}</h2>
              <p>${item.price.toFixed(2)} each</p>
            </div>
            <div className='cart-item-controls'>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <p className='cart-item-subtotal'>${(item.price * item.quantity).toFixed(2)}</p>
            <button className='btn-remove' onClick={() => removeFromCart(item.id)}>✕</button>
          </div>
        ))}
      </div>
      <div className='cart-footer'>
        <p className='cart-total'>Total: <strong>${total.toFixed(2)}</strong></p>
        <button className='btn-checkout'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart
