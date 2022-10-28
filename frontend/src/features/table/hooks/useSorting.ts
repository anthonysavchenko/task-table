import React from 'react'

import { OrderBy } from '../types'
import { toggleOrderBy } from '../utils'

export const useSorting = () => {
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

  return [
    orderByName,
    orderByQuantity,
    orderByDistance,
    handleOrderByName,
    handleOrderByQuantity,
    handleOrderByDistance
  ] as const
}
