import { DataRow } from '../types'
import { sortAscending, sortDescending } from '../utils'
import { useOrderBy } from './useOrderBy'

export const useSorting = (rows: DataRow[]) => {
  const clearOrderBy = () => {
    clearOrderByName(), clearOrderByQuantity(), clearOrderByDistance()
  }
  const [orderByName, clearOrderByName, handleOrderByName] =
    useOrderBy(clearOrderBy)
  const [orderByQuantity, clearOrderByQuantity, handleOrderByQuantity] =
    useOrderBy(clearOrderBy)
  const [orderByDistance, clearOrderByDistance, handleOrderByDistance] =
    useOrderBy(clearOrderBy)

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
