function AboutLink({ label = 'About us', href = '/about' }) {
  return <a className="text-link" href={href}>{label} <span aria-hidden="true">↗</span></a>
}

export default AboutLink
