import React from 'react'

import { DataRow, FilterColumn, FilterOperator } from '../types'

export const useFiltration = (rows: DataRow[]) => {
  const [filterColumn, setFilterColumn] = React.useState<
    FilterColumn | undefined
  >()
  const [filterOperator, setFilterOperatior] = React.useState<
    FilterOperator | undefined
  >()
  const [filterValue, setFilterValue] = React.useState<string>('')

  const handleFilterColumnSelect = React.useCallback(
    (x?: FilterColumn) => setFilterColumn(x),
    []
  )
  const handleFilterOperatorSelect = React.useCallback(
    (x?: FilterOperator) => setFilterOperatior(x),
    []
  )
  const handleFilterValueSelect = React.useCallback(
    (x: string) => setFilterValue(x),
    []
  )

  const filteredRows =
    filterColumn && filterOperator && filterValue
      ? rows.filter(row =>
          filterValues(filterColumn, filterValue, filterOperator, row)
        )
      : rows

  return [
    filteredRows,
    filterColumn,
    filterOperator,
    filterValue,
    handleFilterColumnSelect,
    handleFilterOperatorSelect,
    handleFilterValueSelect
  ] as const
}

const filterValues = (
  column: FilterColumn,
  value: string,
  operator: FilterOperator,
  row: DataRow
) => {
  const castedColumnValue = getColumnValue(column, row)
  const castedFilterValue =
    column === FilterColumn.Name ? value : parseInt(value)

  switch (operator) {
    case FilterOperator.Equals:
    default:
      return castedColumnValue === castedFilterValue
    case FilterOperator.LessThan:
      return castedColumnValue < castedFilterValue
    case FilterOperator.GreaterThan:
      return castedColumnValue > castedFilterValue
    case FilterOperator.Containes:
      if (
        typeof castedColumnValue === 'string' &&
        typeof castedFilterValue === 'string'
      ) {
        return castedColumnValue.includes(castedFilterValue)
      }
      if (
        typeof castedColumnValue === 'number' &&
        typeof castedFilterValue === 'number'
      ) {
        return String(castedColumnValue).includes(String(castedFilterValue))
      }
      return false
  }
}

const getColumnValue = (column: FilterColumn, row: DataRow) => {
  switch (column) {
    case FilterColumn.Name:
    default:
      return row.name
    case FilterColumn.Quantity:
      return row.quantity
    case FilterColumn.Distance:
      return row.distance
  }
}
