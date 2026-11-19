import { flowers } from '../../data/flowers.js'

const storyPhotos = [
  { src: flowers.singlePeony, alt: 'A pink flower in a vase' },
  { src: flowers.magentaPeony, alt: 'A deep pink peony' },
  { src: flowers.whitePeonies, alt: 'A white flower in a garden' },
]

function StoryPhotoGallery() {
  return (
    <section className="about-gallery" aria-label="Flowers from our story">
      {storyPhotos.map((photo) => <img key={photo.src} src={photo.src} alt={photo.alt} />)}
    </section>
  )
}

export default StoryPhotoGallery
