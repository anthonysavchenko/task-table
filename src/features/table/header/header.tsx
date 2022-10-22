import React from 'react'

import { OrderBy } from '../types'
import { Cell } from './cell'
import { root } from './header.style'

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
    <Cell>Date and Time</Cell>
    <Cell orderBy={orderByName} onOrderBy={onOrderByName}>
      Name
    </Cell>
    <Cell orderBy={orderByQuantity} onOrderBy={onOrderByQuantity}>
      Quantity
    </Cell>
    <Cell orderBy={orderByDistance} onOrderBy={onOrderByDistance}>
      Distance
    </Cell>
  </div>
)
