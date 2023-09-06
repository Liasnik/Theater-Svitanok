import React, { useRef, useState } from 'react'
import './slider.css'
import image1 from './../../images/Img/Slider-1.png'
import image2 from './../../images/Img/Slider-2.png'
import image3 from './../../images/Img/Slider-3.png'

const Slider = () => {
  const sliderRef = useRef(null)
  const [currentShow, setCurrentSow] = useState(0)

  const handleNext = () => {
    setCurrentSow((prevShow) =>
      prevShow + 1 === showList.length - 2 ? 0 : prevShow + 1
    )
  }

  const handlePrevious = () => {
    setCurrentSow((prevShow) =>
      prevShow === 0 ? showList.length - 1 : prevShow - 1
    )
  }

  return (
    <div className="slider-container">
      <div
        onClick={handleNext}
        // onScroll={handleNext}
        className="slider"
        ref={sliderRef}
      >
        <div
          className="slides"
          style={{ transform: `translateX(-${currentShow * 33.33}%)` }}
        >
          {showList.map((show, index) => {
            let slideClassName = 'slide'
            if (index === currentShow) {
              slideClassName += ' previous'
            } else if (index === currentShow + 1) {
              slideClassName += ' active'
            } else if (index === currentShow + 2) {
              slideClassName += ' next'
            }

            return (
              <>
                <div key={show.id} className={slideClassName}>
                  <img src={show.imageUrl} alt={'Cat #' + show.id} />
                  <h3 className="Performance_name">{show.name}</h3>
                </div>
              </>
            )
          })}
        </div>
      </div>

      <div className="button_block">
        <button className="button" onClick={handlePrevious}>
          Previous
        </button>
        <button className="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Slider

// const catList = []
// for (let i = 1; i < 17; i++) {
//   catList.push({
//     id: i,
//     imageUrl: 'https://placekitten.com/250/200?image=' + i,
//   })
// }

const showList = [
  {
    id: 1,
    imageUrl: image3,
    name: '“Часові рамки”',
  },
  {
    id: 2,
    imageUrl: image1,
    name: '“Любов до трьох апельсинів”',
  },
  {
    id: 3,
    imageUrl: image2,
    name: '“Загублені в морі зорі”',
  },
  {
    id: 4,
    imageUrl: image1,
    name: '“Любов до трьох апельсинів”',
  },
  {
    id: 6,
    imageUrl: image3,
    name: '“Часові рамки”',
  },

  {
    id: 5,
    imageUrl: image2,
    name: '“загублені в морі зорі”',
  },
  {
    id: 9,
    imageUrl: image1,
    name: '“Любов до трьох апельсинів”',
  },
  {
    id: 8,
    imageUrl: image3,
    name: '“Часові рамки”',
  },
  {
    id: 7,
    imageUrl: image2,
    name: '“загублені в морі зорі”',
  },
]
