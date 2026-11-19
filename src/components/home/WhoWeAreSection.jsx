import AboutLink from '../AboutLink.jsx'
import SectionLabel from '../shared/SectionLabel.jsx'

function WhoWeAreSection() {
  return (
    <section className="intro-section content-grid">
      <SectionLabel>Who we are</SectionLabel>
      <div className="intro-copy">
        <h2>We’re Our Blooms® and we’re here to help you find your floral story.</h2>
        <AboutLink />
      </div>
    </section>
  )
}

export default WhoWeAreSection
