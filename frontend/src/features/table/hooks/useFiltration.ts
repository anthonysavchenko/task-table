import React from 'react'

import { FilterColumn, FilterOperator } from '../types'

export const useFiltration = () => {
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

  return [
    filterColumn,
    filterOperator,
    filterValue,
    handleFilterColumnSelect,
    handleFilterOperatorSelect,
    handleFilterValueSelect
  ] as const
}
