import React from 'react'

import axios from 'axios'

import { DataRow, FilterColumn, FilterOperator } from '../types'

export const useRows = (
  filterColumn?: FilterColumn,
  filterOperator?: FilterOperator,
  filterValue?: string
) => {
  const [rows, setRows] = React.useState<DataRow[]>([])

  React.useEffect(
    () =>
      void (async () =>
        setRows(
          await getServerData(filterColumn, filterOperator, filterValue)
        ))(),
    [filterColumn, filterOperator, filterValue]
  )

  return rows
}

const getServerData = async (
  filterColumn?: FilterColumn,
  filterOperator?: FilterOperator,
  filterValue?: string
) =>
  await axios
    .get<DataRow[]>(process.env.REACT_APP_API_URL ?? '', {
      params: { filterColumn, filterOperator, filterValue }
    })
    .then(response => response.data)
    .catch(() => {
      console.warn('Bad Response')
      return [] as DataRow[]
    })
