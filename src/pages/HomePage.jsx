import { flowers } from '../data/flowers.js'
import Footer from '../components/Footer.jsx'
import WorkWithUs from '../components/WorkWithUs.jsx'
import FeatureImage from '../components/shared/FeatureImage.jsx'
import FlowerCarousel from '../components/home/FlowerCarousel.jsx'
import HomeHero from '../components/home/HomeHero.jsx'
import WhatWeDoSection from '../components/home/WhatWeDoSection.jsx'
import WhoWeAreSection from '../components/home/WhoWeAreSection.jsx'

function HomePage() {
  return (
    <>
      <main>
        <HomeHero />
        <WhoWeAreSection />
        <FlowerCarousel />
        <WhatWeDoSection />
        <FeatureImage
          className="wide-flower-photo"
          src={flowers.purpleStems}
          alt="A close view of purple flowers"
        />
        <WorkWithUs />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
