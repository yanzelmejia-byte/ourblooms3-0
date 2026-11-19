import { homeServices } from '../../data/siteContent.js'
import SectionLabel from '../shared/SectionLabel.jsx'
import ServiceCard from './ServiceCard.jsx'

function WhatWeDoSection() {
  return (
    <section className="services-section" id="what-we-do">
      <div className="section-heading">
        <SectionLabel>What we do</SectionLabel>
        <h2>We bring a touch of that simple magic into your world.</h2>
      </div>
      <div className="service-grid">
        {homeServices.map((service, index) => (
          <ServiceCard key={service.title} service={service} number={index + 1} />
        ))}
      </div>
    </section>
  )
}

export default WhatWeDoSection
