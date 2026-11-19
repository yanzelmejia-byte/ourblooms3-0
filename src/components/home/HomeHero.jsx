import { flowers } from '../../data/flowers.js'

function OfferBadge() {
  return (
    <div className="offer-badge">
      <span>New</span>
      <strong>10% off your first order</strong>
      <small>Special</small>
    </div>
  )
}

function HomeHero() {
  return (
    <section className="home-hero">
      <h1>Our Blooms<sup>®</sup></h1>
      <div className="hero-photo-wrap">
        <img className="hero-photo" src={flowers.hero} alt="A soft coral flower in a glass vase" />
        <OfferBadge />
      </div>
    </section>
  )
}

export default HomeHero
