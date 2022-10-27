import React from 'react'

import { FilterColumn, FilterOperator } from '../types'

export const NO_SPECIAL_CHARS_REG_EX = /[^a-zA-Z0-9\s]/g

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
  const handleFilterValueChange = React.useCallback(
    (x: string) => setFilterValue(x.replace(NO_SPECIAL_CHARS_REG_EX, '')),
    []
  )

  return [
    filterColumn,
    filterOperator,
    filterValue,
    handleFilterColumnSelect,
    handleFilterOperatorSelect,
    handleFilterValueChange
  ] as const
}
