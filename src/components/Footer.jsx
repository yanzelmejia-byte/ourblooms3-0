import { flowers } from '../data/flowers.js'

function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <img className="footer-image" src={flowers.orange} alt="" aria-hidden="true" />
      <a className="footer-mark" href="/" aria-label="Our Blooms home">OB.</a>
      <span className="footer-location">Miami, FL</span>
      <a className="footer-contact" href="mailto:hello@ourblooms.com">Contact</a>
    </footer>
  )
}

export default Footer
