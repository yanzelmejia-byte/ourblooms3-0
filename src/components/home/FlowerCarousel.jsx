import { flowers } from '../../data/flowers.js'

const carouselImages = [
  flowers.rose,
  flowers.white,
  flowers.rose,
  flowers.whiteTulips,
  flowers.orchids,
]

function FlowerCarousel() {
  return (
    <section className="image-ribbon" aria-label="A collection of fresh flowers">
      {carouselImages.map((image, index) => (
        <img key={`${image}-${index}`} src={image} alt="Seasonal flowers from Our Blooms" />
      ))}
    </section>
  )
}

export default FlowerCarousel
