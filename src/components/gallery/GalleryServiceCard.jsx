function GalleryServiceCard({ service }) {
  return (
    <article>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      {service.image && <img src={service.image} alt={`${service.title} example`} />}
    </article>
  )
}

export default GalleryServiceCard
