import React from 'react'

import { root } from './cell.style'

export interface CellProps {
  children: React.ReactNode
}

export const Cell: React.FC<CellProps> = ({ children }) => (
  <div style={root}>{children}</div>
)
