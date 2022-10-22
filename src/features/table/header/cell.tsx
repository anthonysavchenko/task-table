import React from 'react'

import { useHover } from '../../../hooks'
import { icon, root, rootHover, title } from '../header/cell.style'
import { OrderBy } from '../types'

export interface CellProps {
  orderBy?: OrderBy
  children: React.ReactNode
  onOrderBy?(): void
}

const Cell: React.FC<CellProps> = React.memo<CellProps>(
  ({ orderBy, children, onOrderBy }: CellProps) => {
    const [hover, handleMouseEnter, handleMouseLeave] = useHover()

    return (
      <div
        style={{ ...root, ...(hover && rootHover) }}
        onClick={onOrderBy}
        onMouseEnter={onOrderBy && handleMouseEnter}
        onMouseLeave={onOrderBy && handleMouseLeave}
      >
        <div style={icon}>
          {orderBy === 'ascending' ? '∧' : orderBy === 'descending' ? '∨' : ''}
        </div>
        <div style={title}>{children}</div>
      </div>
    )
  }
)

Cell.displayName = 'Cell'
export { Cell }
