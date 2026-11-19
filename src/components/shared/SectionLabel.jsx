function SectionLabel({ children, className = '' }) {
  return <p className={`eyebrow ${className}`.trim()}>{children}</p>
}

export default SectionLabel
