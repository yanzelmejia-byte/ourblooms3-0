import { flowers } from '../../data/flowers.js'
import SectionLabel from '../shared/SectionLabel.jsx'
import OwnerLabel from './OwnerLabel.jsx'

function StoryIntro() {
  return (
    <section className="story-section content-grid">
      <SectionLabel>Our story</SectionLabel>
      <img className="story-photo" src={flowers.woman} alt="A florist carrying a generous bouquet" />
      <OwnerLabel name="Lily Smith" role="Owner" />
      <h2 className="story-heading">Our Blooms was founded in honor of Lily Smith’s loving aunts, Teresa and Beth.</h2>
    </section>
  )
}

export default StoryIntro
