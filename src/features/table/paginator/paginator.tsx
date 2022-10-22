import React from 'react'

import { Button } from './button'
import { root, separator } from './paginator.style'

export interface PaginatorProps {
  page: number
  pageQuantity: number
  onPageClick(page: number): void
  onPrevClick(): void
  onNextClick(): void
}

export const Paginator: React.FC<PaginatorProps> = ({
  page,
  pageQuantity,
  onPageClick,
  onPrevClick,
  onNextClick
}) => {
  const pageButtons: React.ReactNode[] = []
  const pagesNearActive = 2
  let showDotsBefore = false
  let showDotsAfter = false
  const dots = <span style={separator}>•••</span>

  for (let i = 1; i <= pageQuantity; i++) {
    if (
      i === 1 ||
      i === pageQuantity ||
      (i >= page - pagesNearActive && i <= page + pagesNearActive)
    ) {
      pageButtons.push(
        <Button
          key={i}
          pageNumber={i}
          isActive={i === page}
          onClick={onPageClick}
        >
          {i}
        </Button>
      )
    } else if (i < page && !showDotsBefore) {
      pageButtons.push(dots)
      showDotsBefore = true
    } else if (i > page && !showDotsAfter) {
      pageButtons.push(dots)
      showDotsAfter = true
    }
  }

  return (
    <div style={root}>
      {page !== 1 && <Button onClick={onPrevClick}>←</Button>}
      {pageButtons}
      {page !== pageQuantity && <Button onClick={onNextClick}>→</Button>}
    </div>
  )
}
