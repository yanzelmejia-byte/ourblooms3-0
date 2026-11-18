import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const currentPage = window.location.pathname.replace(/\/$/, '')
  const isHome = currentPage === ''
  const links = isHome
    ? [
        { label: 'Menu', href: '#what-we-do' },
        { label: 'Order', href: 'mailto:hello@ourblooms.com' },
        { label: 'Profile', href: '/about' },
      ]
    : [
        { label: 'Gallery', href: '/gallery' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: 'mailto:hello@ourblooms.com' },
      ]

  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Our Blooms home">Jannat</a>
      <button
        className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        {links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
      </nav>
    </header>
  )
}

export default Header
