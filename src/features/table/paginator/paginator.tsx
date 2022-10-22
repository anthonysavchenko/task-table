import React from 'react'

import { Button } from './button'
import { root, separator } from './paginator.style'

export interface PaginatorProps {
  page: number
  pageQuantity: number
  onPageSelect(page: number): void
  onPrevPage(): void
  onNextPage(): void
}

const Paginator: React.FC<PaginatorProps> = React.memo<PaginatorProps>(
  ({
    page,
    pageQuantity,
    onPageSelect,
    onPrevPage,
    onNextPage
  }: PaginatorProps) => {
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
            onClick={onPageSelect}
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
        {page !== 1 && <Button onClick={onPrevPage}>←</Button>}
        {pageButtons}
        {page !== pageQuantity && <Button onClick={onNextPage}>→</Button>}
      </div>
    )
  }
)

Paginator.displayName = 'Paginator'
export { Paginator }
