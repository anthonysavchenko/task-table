import React from 'react'

import { data } from './constants'
import { Header } from './header'
import { Paginator } from './paginator'
import { Row } from './row'
import { root } from './table.style'
import { OrderBy } from './types'

export const Table: React.FC = () => {
  const [orderByName, handleOrderByName] = useOrderBy()
  const [orderByQuantity, handleOrderByQuantity] = useOrderBy()
  const [orderByDistance, handleOrderByDistance] = useOrderBy()

  return (
    <section style={root}>
      <Header
        orderByName={orderByName}
        orderByQuantity={orderByQuantity}
        orderByDistance={orderByDistance}
        onOrderByName={handleOrderByName}
        onOrderByQuantity={handleOrderByQuantity}
        onOrderByDistance={handleOrderByDistance}
      />
      {data.map((x, index) => (
        <Row key={x.id} rowNumber={index + 1} data={x} />
      ))}
      <Paginator />
    </section>
  )
}

const useOrderBy = () => {
  const [orderBy, setOrderBy] = React.useState<OrderBy | undefined>()
  const handleOrderBy = React.useCallback(
    () => setOrderBy(order => toggleOrderBy(order)),
    []
  )

  return [orderBy, handleOrderBy] as const
}

const toggleOrderBy = (orderBy?: OrderBy): OrderBy | undefined => {
  switch (orderBy) {
    case 'ascending':
      return 'descending'
    case 'descending':
      return
    default:
      return 'ascending'
  }
}
