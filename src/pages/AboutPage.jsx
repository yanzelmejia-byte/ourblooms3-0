import { flowers } from '../data/flowers.js'
import Footer from '../components/Footer.jsx'
import WorkWithUs from '../components/WorkWithUs.jsx'
import StoryCopy from '../components/about/StoryCopy.jsx'
import StoryIntro from '../components/about/StoryIntro.jsx'
import StoryPhotoGallery from '../components/about/StoryPhotoGallery.jsx'
import FeatureImage from '../components/shared/FeatureImage.jsx'
import PageTitle from '../components/shared/PageTitle.jsx'

function AboutPage() {
  return (
    <>
      <main className="inner-page about-page">
        <PageTitle>About</PageTitle>
        <StoryIntro />
        <StoryPhotoGallery />
        <StoryCopy />
        <FeatureImage
          className="about-wide-photo"
          src={flowers.wrappedTulips}
          alt="Pink tulips wrapped for gifting"
        />
        <WorkWithUs actionLabel="Book a consultation" showEyebrow={false} />
      </main>
      <Footer />
    </>
  )
}

export default AboutPage
