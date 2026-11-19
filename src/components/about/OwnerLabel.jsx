function OwnerLabel({ name, role }) {
  return (
    <div className="owner-label">
      <strong>{name}</strong>
      <span>{role}</span>
    </div>
  )
}

export default OwnerLabel
