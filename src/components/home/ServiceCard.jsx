function ServiceCard({ service, number }) {
  return (
    <article className="service-card">
      <span className="service-number">{number}</span>
      {service.image && <img src={service.image} alt={`${service.title} floral design`} />}
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  )
}

export default ServiceCard
