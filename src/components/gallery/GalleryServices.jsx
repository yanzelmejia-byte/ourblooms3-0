import { services } from '../../data/siteContent.js'
import SectionLabel from '../shared/SectionLabel.jsx'
import GalleryServiceCard from './GalleryServiceCard.jsx'

function GalleryServices() {
  return (
    <section className="gallery-services">
      <SectionLabel>Services</SectionLabel>
      <div className="gallery-service-grid">
        {services.map((service) => (
          <GalleryServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  )
}

export default GalleryServices
