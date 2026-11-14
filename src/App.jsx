import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import { selectCartCount } from './CartSlice';

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6H19a2 2 0 0 0 2-1.6L23 6H6" />
    </svg>
  );
}

function Navbar() {
  const count = useSelector(selectCartCount);
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="Paradise Nursery home">
          <span className="brand__mark" aria-hidden="true">✳</span>
          <span className="brand__name">Paradise <span>Nursery</span></span>
        </Link>
        <div className="nav__links">
          <NavLink end to="/">Home</NavLink>
          <NavLink to="/products">Plants</NavLink>
          <NavLink to="/cart" className="nav__cart" aria-label={`Cart with ${count} items`}>
            <CartIcon /><span className="nav__cart-label">Cart</span>
            <span className="cart-count">{count}</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__copy">
              <span className="eyebrow eyebrow--light">Welcome to Paradise Nursery</span>
              <h1>Bring a little<br /><em>nature home.</em></h1>
              <p>Beautiful plants. Happier spaces. Discover easy-care greens and extraordinary leaves for every corner of your home.</p>
              <Link className="button button--cream" to="/products">
                Get Started <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="hero__photo" aria-hidden="true">
              <img src="/images/hero-plants.svg" alt="" />
            </div>
          </div>
          <span className="hero__caption">GROW SOMETHING GOOD · EST. 2026</span>
        </section>
        <div className="trust-strip">
          <div className="container trust-strip__inner">
            <span>✿ <strong>Curated with care</strong></span>
            <span>☼ <strong>Plants for every space</strong></span>
            <span>♡ <strong>Made for plant lovers</strong></span>
          </div>
        </div>
        <AboutUs />
        <section className="home-cta container">
          <div><span className="eyebrow">Your green journey begins here</span><h2>Find your next favorite leaf.</h2></div>
          <Link className="button button--dark" to="/products">Shop all plants <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <span>✳ Paradise Nursery</span>
        <span>Growing green spaces, one plant at a time.</span>
        <span>© 2026 Paradise Nursery</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<main className="not-found container"><h1>We couldn't find that page.</h1><Link className="button button--dark" to="/">Back home</Link></main>} />
      </Routes>
      <Footer />
    </div>
  );
}
