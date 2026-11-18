import AboutLink from './AboutLink.jsx'

function WorkWithUs({ actionLabel = 'About us', showEyebrow = true }) {
  return (
    <section className="work-section" id="work-with-us">
      {showEyebrow && <p className="eyebrow">Work with us</p>}
      <h2>Discover how we can add a touch of natural beauty to your next event.</h2>
      <AboutLink label={actionLabel} href={actionLabel === 'Book a consultation' ? 'mailto:hello@ourblooms.com' : '/about'} />
    </section>
  )
}

export default WorkWithUs
