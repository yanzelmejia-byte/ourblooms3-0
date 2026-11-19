function ArrangementCard({ arrangement }) {
  return (
    <article className="arrangement-card">
      <div className="arrangement-caption">
        <h2>{arrangement.name}</h2>
        <span>{arrangement.price}</span>
      </div>
      <img src={arrangement.image} alt={arrangement.alt} />
    </article>
  )
}

export default ArrangementCard
