import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

interface ButtonGroupProps {
  next?: () => void
  previous?: () => void
  goToSlide?: (index: number) => void
  currentSlide?: number
  totalItems?: number
  children?: React.ReactNode
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  next,
  previous,
  currentSlide,
  totalItems,
  children,
}) => {
  const isFirstSlide = currentSlide === 0
  const isLastSlide =
    totalItems !== undefined && currentSlide === totalItems - 1

  return (
    <div className="carousel-button-group absolute top-1/2 -translate-y-1/2 left-0 right-0">
      <IoIosArrowBack
        className={`${isFirstSlide ? 'opacity-50' : ''} text-4xl absolute left-0 ml-5`}
        onClick={isFirstSlide ? undefined : previous} // Trocado para undefined
      />
      <IoIosArrowForward
        className={`${isLastSlide ? 'opacity-50' : ''} text-4xl absolute right-0 mr-5`}
        onClick={isLastSlide ? undefined : next} // Trocado para undefined
      />
      {children}
    </div>
  )
}

export default ButtonGroup
