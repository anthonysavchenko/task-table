import React from 'react'

import { Button } from './button'
import { root, separator } from './paginator.style'

export interface PaginatorProps {
  page: number
  pageQuantity: number
  pagesNearActive?: number
  onPageSelect(page: number): void
  onPrevPage(): void
  onNextPage(): void
}

const Paginator: React.FC<PaginatorProps> = React.memo<PaginatorProps>(
  ({
    page,
    pageQuantity,
    pagesNearActive,
    onPageSelect,
    onPrevPage,
    onNextPage
  }: PaginatorProps) => {
    const pageButtons: React.ReactNode[] = []
    const pagesNearActiveQuantity =
      !pagesNearActive || pagesNearActive < 1 ? 0 : pagesNearActive
    let showDotsBefore = false
    let showDotsAfter = false
    const Dots: React.FC = () => <div style={separator}>•••</div>

    for (let i = 1; i <= pageQuantity; i++) {
      if (
        i === 1 ||
        i === pageQuantity ||
        (i >= page - pagesNearActiveQuantity &&
          i <= page + pagesNearActiveQuantity)
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
        pageButtons.push(<Dots key={'leftDots'} />)
        showDotsBefore = true
      } else if (i > page && !showDotsAfter) {
        pageButtons.push(<Dots key={'rightDots'} />)
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
