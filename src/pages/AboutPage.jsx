import { flowers } from '../data/flowers.js'
import Footer from '../components/Footer.jsx'
import WorkWithUs from '../components/WorkWithUs.jsx'

function AboutPage() {
  return (
    <>
      <main className="inner-page about-page">
        <h1 className="page-title">About</h1>
        <section className="story-section content-grid">
          <p className="eyebrow">Our story</p>
          <img className="story-photo" src={flowers.woman} alt="A florist carrying a generous bouquet" />
          <div className="owner-label"><strong>Lily Smith</strong><span>Owner</span></div>
          <h2 className="story-heading">Our Blooms was founded in honor of Lily Smith’s loving aunts, Teresa and Beth.</h2>
        </section>
        <section className="about-gallery" aria-label="Flowers from our story">
          <img src={flowers.singlePeony} alt="A pink flower in a vase" />
          <img src={flowers.magentaPeony} alt="A deep pink peony" />
          <img src={flowers.whitePeonies} alt="A white flower in a garden" />
        </section>
        <section className="story-copy">
          <p>Lily’s journey with flowers began in the heart of Oregon, amidst the flourishing fields of her aunts’ flower farm. It was there, surrounded by the abundance of nature, that she discovered her passion for floral design. From learning the names of each bloom to understanding the delicate balance of a bouquet, she absorbed the artistry of flowers like the rich Oregon soil.</p>
          <p>Bloom &amp; Co. is the expression of that lifelong passion, a place where her love for flowers translates into beautifully curated arrangements that bring joy and elegance to your spaces.</p>
          <p>From humble beginnings, Bloom&amp;Co has grown into a beloved local destination, known for its artistic arrangements, personal service, and commitment to quality.</p>
        </section>
        <img className="about-wide-photo" src={flowers.wrappedTulips} alt="Pink tulips wrapped for gifting" />
        <WorkWithUs actionLabel="Book a consultation" showEyebrow={false} />
      </main>
      <Footer />
    </>
  )
}

export default AboutPage
