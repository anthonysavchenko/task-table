import React from 'react'

import { DataRow, OrderBy } from '../types'
import { sortAscending, sortDescending, toggleOrderBy } from '../utils'

export const useSorting = (rows: DataRow[]) => {
  const [orderByName, setOrderByName] = React.useState<OrderBy | undefined>()
  const [orderByQuantity, setOrderByQuantity] = React.useState<
    OrderBy | undefined
  >()
  const [orderByDistance, setOrderByDistance] = React.useState<
    OrderBy | undefined
  >()

  const handleOrderByName = React.useCallback(() => {
    if (!orderByName) {
      setOrderByQuantity(undefined)
      setOrderByDistance(undefined)
    }
    setOrderByName(prev => toggleOrderBy(prev))
  }, [orderByName])

  const handleOrderByQuantity = React.useCallback(() => {
    if (!orderByQuantity) {
      setOrderByName(undefined)
      setOrderByDistance(undefined)
    }
    setOrderByQuantity(prev => toggleOrderBy(prev))
  }, [orderByQuantity])

  const handleOrderByDistance = React.useCallback(() => {
    if (!orderByDistance) {
      setOrderByName(undefined)
      setOrderByQuantity(undefined)
    }
    setOrderByDistance(prev => toggleOrderBy(prev))
  }, [orderByDistance])

  const sortedRows = orderByName
    ? rows
        .slice()
        .sort((a, b) =>
          orderByName === 'ascending'
            ? sortAscending(a.name, b.name)
            : sortDescending(a.name, b.name)
        )
    : orderByQuantity
    ? rows
        .slice()
        .sort((a, b) =>
          orderByQuantity === 'ascending'
            ? sortAscending(a.quantity, b.quantity)
            : sortDescending(a.quantity, b.quantity)
        )
    : orderByDistance
    ? rows
        .slice()
        .sort((a, b) =>
          orderByDistance === 'ascending'
            ? sortAscending(a.distance, b.distance)
            : sortDescending(a.distance, b.distance)
        )
    : rows

  return [
    sortedRows,
    orderByName,
    orderByQuantity,
    orderByDistance,
    handleOrderByName,
    handleOrderByQuantity,
    handleOrderByDistance
  ] as const
}
