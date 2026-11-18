import { arrangements, services } from '../data/siteContent.js'
import Footer from '../components/Footer.jsx'
import WorkWithUs from '../components/WorkWithUs.jsx'

function GalleryPage() {
  return (
    <>
      <main className="inner-page gallery-page">
        <h1 className="page-title">Gallery</h1>
        <section className="arrangements-section content-grid">
          <p className="eyebrow">Seasonal arrangements</p>
          <div className="arrangement-grid">
            {arrangements.map((arrangement) => (
              <article className="arrangement-card" key={arrangement.name}>
                <div className="arrangement-caption"><h2>{arrangement.name}</h2><span>{arrangement.price}</span></div>
                <img src={arrangement.image} alt={arrangement.alt} />
              </article>
            ))}
          </div>
        </section>
        <section className="gallery-services">
          <h2 className="eyebrow">Services</h2>
          <div className="gallery-service-grid">
            {services.map((service) => (
              <article key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.image && <img src={service.image} alt="" />}
              </article>
            ))}
          </div>
        </section>
        <WorkWithUs />
      </main>
      <Footer />
    </>
  )
}

export default GalleryPage
