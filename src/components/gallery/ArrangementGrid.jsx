import { arrangements } from '../../data/siteContent.js'
import SectionLabel from '../shared/SectionLabel.jsx'
import ArrangementCard from './ArrangementCard.jsx'

function ArrangementGrid() {
  return (
    <section className="arrangements-section content-grid">
      <SectionLabel>Seasonal arrangements</SectionLabel>
      <div className="arrangement-grid">
        {arrangements.map((arrangement) => (
          <ArrangementCard key={arrangement.name} arrangement={arrangement} />
        ))}
      </div>
    </section>
  )
}

export default ArrangementGrid
