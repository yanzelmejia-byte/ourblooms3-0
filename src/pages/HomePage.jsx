import { flowers } from '../data/flowers.js'
import { homeServices } from '../data/siteContent.js'
import AboutLink from '../components/AboutLink.jsx'
import Footer from '../components/Footer.jsx'
import WorkWithUs from '../components/WorkWithUs.jsx'

function HomePage() {
  return (
    <>
      <main>
        <section className="home-hero">
          <h1>Our Blooms<sup>®</sup></h1>
          <div className="hero-photo-wrap">
            <img className="hero-photo" src={flowers.hero} alt="A soft coral flower in a glass vase" />
            <div className="offer-badge"><span>New</span><strong>10% off your first order</strong><small>Special</small></div>
          </div>
        </section>

        <section className="intro-section content-grid">
          <p className="eyebrow">Who we are</p>
          <div className="intro-copy">
            <h2>We’re Our Blooms® and we’re here to help you find your floral story.</h2>
            <AboutLink />
          </div>
        </section>

        <section className="image-ribbon" aria-label="A collection of fresh flowers">
          {[flowers.rose, flowers.white, flowers.rose, flowers.whiteTulips, flowers.orchids].map((image, index) => (
            <img key={image + index} src={image} alt="Seasonal flowers from Our Blooms" />
          ))}
        </section>

        <section className="services-section" id="what-we-do">
          <div className="section-heading">
            <p className="eyebrow">What we do</p>
            <h2>We bring a touch of that simple magic into your world.</h2>
          </div>
          <div className="service-grid">
            {homeServices.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">{index + 1}</span>
                {service.image && <img src={service.image} alt={`${service.title} floral design`} />}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <img className="wide-flower-photo" src={flowers.purpleStems} alt="A close view of purple flowers" />
        <WorkWithUs />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
