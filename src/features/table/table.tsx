import React from 'react'

import { data } from './constants'
import { Row } from './row'
import { root } from './table.style'

export const Table: React.FC = () => (
  <section style={root}>
    {data.map((x, index) => (
      <Row key={x.id} rowNumber={index + 1} data={x} />
    ))}
  </section>
)
