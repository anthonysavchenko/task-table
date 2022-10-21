import React from 'react'

import { HeaderCell } from './header-cell'
import { root } from './header.style'
import { OrderBy } from './types'

export interface HeaderProps {
  orderByName?: OrderBy
  orderByQuantity?: OrderBy
  orderByDistance?: OrderBy
  onOrderByName(): void
  onOrderByQuantity(): void
  onOrderByDistance(): void
}

export const Header: React.FC<HeaderProps> = ({
  orderByName,
  orderByQuantity,
  orderByDistance,
  onOrderByName,
  onOrderByQuantity,
  onOrderByDistance
}) => (
  <div style={root}>
    <HeaderCell>Date and Time</HeaderCell>
    <HeaderCell orderBy={orderByName} onOrderBy={onOrderByName}>
      Name
    </HeaderCell>
    <HeaderCell orderBy={orderByQuantity} onOrderBy={onOrderByQuantity}>
      Quantity
    </HeaderCell>
    <HeaderCell orderBy={orderByDistance} onOrderBy={onOrderByDistance}>
      Distance
    </HeaderCell>
  </div>
)
