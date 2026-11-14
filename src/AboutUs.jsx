export default function AboutUs() {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__content">
        <span className="eyebrow">Our little story</span>
        <h2 id="about-title">A greener home is a happier home.</h2>
        <p>
          Welcome to Paradise Nursery. We believe that every space deserves a little
          greenery, whether it is a sunny apartment, a cozy office, or your very first
          windowsill garden.
        </p>
        <p>
          Our thoughtfully selected collection brings together easy-care favorites,
          graceful leafy companions, and bold statement plants. We make it simple
          to discover plants you will love and feel confident caring for.
        </p>
        <div className="about__stats" aria-label="Our values">
          <div><strong>18</strong><span>Thoughtfully chosen plants</span></div>
          <div><strong>3</strong><span>Collections to explore</span></div>
          <div><strong>100%</strong><span>Made for plant lovers</span></div>
        </div>
      </div>
      <div className="about__illustration">
        <img src="/images/plant-13.svg" alt="Illustration of a Monstera houseplant" />
      </div>
    </section>
  );
}
