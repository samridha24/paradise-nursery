import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from './CartSlice';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState(false);

  return (
    <main className="cart-page container">
      <div className="page-intro cart-intro">
        <span className="eyebrow">Your little greenhouse</span>
        <h1>Your shopping cart<span className="cart-title-count">{count}</span></h1>
        <p>All your future leafy friends, gathered in one place.</p>
      </div>
      {items.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart__symbol" aria-hidden="true">☘</div>
          <h2>It's a little quiet in here.</h2>
          <p>Your cart is empty. Come find some greenery to brighten your day.</p>
          <Link to="/products" className="button button--dark">Explore plants ↗</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Cart items">
            <div className="cart-items__heading"><h2>Your plants</h2><span>{count} {count === 1 ? 'item' : 'items'}</span></div>
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img className="cart-row__image" src={item.image} alt={`${item.name} illustration`} />
                <div className="cart-row__details">
                  <h3>{item.name}</h3>
                  <span className="cart-row__unit">${item.price.toFixed(2)} each</span>
                  <button className="text-button" type="button" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                </div>
                <div className="cart-row__actions">
                  <div className="quantity-stepper" aria-label={`Quantity for ${item.name}`}>
                    <button type="button" onClick={() => dispatch(decrementQuantity(item.id))} disabled={item.quantity === 1} aria-label={`Decrease ${item.name} quantity`}>−</button>
                    <output aria-live="polite">{item.quantity}</output>
                    <button type="button" onClick={() => dispatch(incrementQuantity(item.id))} aria-label={`Increase ${item.name} quantity`}>+</button>
                  </div>
                  <strong className="cart-row__subtotal">${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
              </article>
            ))}
            <Link to="/products" className="continue-shopping">← Continue Shopping</Link>
          </section>
          <aside className="order-summary" aria-labelledby="summary-title">
            <span className="eyebrow">Almost there</span>
            <h2 id="summary-title">Order summary</h2>
            <div className="summary-line"><span>Plants ({count})</span><span>${total.toFixed(2)}</span></div>
            <div className="summary-line"><span>Shipping</span><span>Calculated at checkout</span></div>
            <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
            <button className="button button--dark summary-checkout" type="button" onClick={() => setCheckoutMessage(true)}>Checkout <span aria-hidden="true">↗</span></button>
            {checkoutMessage && <p className="checkout-notice" role="status">🌱 Checkout coming soon! Thanks for growing with us.</p>}
            <p className="summary-help">Your plants are waiting for their forever home.</p>
          </aside>
        </div>
      )}
    </main>
  );
}
