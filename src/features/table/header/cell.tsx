import React from 'react'

import { icon, root, rootHover, title } from '../header/cell.style'
import { OrderBy } from '../types'

export interface CellProps {
  orderBy?: OrderBy
  children: React.ReactNode
  onOrderBy?(): void
}
export const Cell: React.FC<CellProps> = ({ orderBy, children, onOrderBy }) => {
  const [hover, setHover] = React.useState(false)
  const handleMouseEnter = () => setHover(true)
  const handleMouseLeave = () => setHover(false)

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
