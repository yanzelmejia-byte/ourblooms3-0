import Footer from '../components/Footer.jsx'
import WorkWithUs from '../components/WorkWithUs.jsx'
import ArrangementGrid from '../components/gallery/ArrangementGrid.jsx'
import GalleryServices from '../components/gallery/GalleryServices.jsx'
import PageTitle from '../components/shared/PageTitle.jsx'

function GalleryPage() {
  return (
    <>
      <main className="inner-page gallery-page">
        <PageTitle>Gallery</PageTitle>
        <ArrangementGrid />
        <GalleryServices />
        <WorkWithUs />
      </main>
      <Footer />
    </>
  )
}

export default GalleryPage
