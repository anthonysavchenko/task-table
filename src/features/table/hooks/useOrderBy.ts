import React from 'react'

import { OrderBy } from '../types'

export const useOrderBy = (clear: () => void) => {
  const [orderBy, setOrderBy] = React.useState<OrderBy | undefined>()
  const handleOrderBy = React.useCallback(() => {
    if (!orderBy) {
      clear()
    }
    setOrderBy(order => toggleOrderBy(order))
  }, [orderBy, clear])
  const clearOrderBy = React.useCallback(() => setOrderBy(undefined), [])

  return [orderBy, clearOrderBy, handleOrderBy] as const
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
