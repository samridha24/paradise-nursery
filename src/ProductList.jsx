import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice';
import { categories, plants } from './data/plants';

function PlantCard({ plant, isInCart }) {
  const dispatch = useDispatch();
  return (
    <article className="plant-card">
      <div className="plant-card__image-wrap">
        <span className="plant-card__tag">{plant.tag}</span>
        <img src={plant.image} alt={`${plant.name} houseplant illustration`} loading="lazy" />
      </div>
      <div className="plant-card__body">
        <div className="plant-card__head">
          <h3>{plant.name}</h3>
          <span className="plant-card__price">${plant.price.toFixed(2)}</span>
        </div>
        <p>{plant.description}</p>
        <button
          type="button"
          className={`button button--add ${isInCart ? 'button--added' : ''}`}
          onClick={() => dispatch(addItem(plant))}
          disabled={isInCart}
          aria-label={isInCart ? `${plant.name} is in your cart` : `Add ${plant.name} to cart`}
        >
          {isInCart ? '✓ Added to cart' : '+ Add to Cart'}
        </button>
      </div>
    </article>
  );
}

export default function ProductList() {
  const cartItems = useSelector(selectCartItems);
  const cartIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="catalog container">
      <div className="page-intro">
        <span className="eyebrow">Our collection</span>
        <h1>Find your green thing.</h1>
        <p>From first-time favorites to striking leafy statements, there is something growing for everyone.</p>
        <div className="category-jumps" aria-label="Jump to a plant category">
          {categories.map((category) => <a href={`#${category.id}`} key={category.id}>{category.name} ↗</a>)}
        </div>
      </div>
      {categories.map((category, index) => (
        <section className="category-section" id={category.id} key={category.id} aria-labelledby={`${category.id}-title`}>
          <div className="category-heading">
            <div>
              <span className="category-heading__number">COLLECTION 0{index + 1}</span>
              <h2 id={`${category.id}-title`}>{category.name}</h2>
              <p>{category.description}</p>
            </div>
            <span className="category-heading__count">06 plants</span>
          </div>
          <div className="plant-grid">
            {plants.filter((plant) => plant.category === category.id).map((plant) => (
              <PlantCard plant={plant} isInCart={cartIds.has(plant.id)} key={plant.id} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
