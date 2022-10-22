import React from 'react'

import { useHover } from '../../../hooks'
import { root, rootActive, rootHover, rootNoPageNumber } from './button.style'

export interface ButtonProps {
  pageNumber?: number
  isActive?: boolean
  children: React.ReactNode
  onClick(pageNumber?: number): void
}

export const Button: React.FC<ButtonProps> = ({
  pageNumber,
  isActive,
  children,
  onClick
}) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault()
    onClick(pageNumber)
  }

  const [hover, handleMouseEnter, handleMouseLeave] = useHover()

  return (
    <div
      style={{
        ...root,
        ...(isActive && rootActive),
        ...(hover && rootHover),
        ...(!pageNumber && rootNoPageNumber)
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
