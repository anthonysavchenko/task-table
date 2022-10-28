import React from 'react'

import axios from 'axios'

import { DataRow, FilterColumn, FilterOperator, OrderBy } from '../types'

export const useRows = (
  filterColumn?: FilterColumn,
  filterOperator?: FilterOperator,
  filterValue?: string,
  orderByName?: OrderBy,
  orderByQuantity?: OrderBy,
  orderByDistance?: OrderBy
) => {
  const [rows, setRows] = React.useState<DataRow[]>([])

  React.useEffect(
    () =>
      void (async () =>
        setRows(
          await getServerData(
            filterColumn,
            filterOperator,
            filterValue,
            orderByName,
            orderByQuantity,
            orderByDistance
          )
        ))(),
    [
      filterColumn,
      filterOperator,
      filterValue,
      orderByName,
      orderByQuantity,
      orderByDistance
    ]
  )

  return rows
}

const getServerData = async (
  filterColumn?: FilterColumn,
  filterOperator?: FilterOperator,
  filterValue?: string,
  orderByName?: OrderBy,
  orderByQuantity?: OrderBy,
  orderByDistance?: OrderBy
) =>
  await axios
    .get<DataRow[]>(process.env.REACT_APP_API_URL ?? '', {
      params: {
        filterColumn: prepareEnumQueryParam(filterColumn),
        filterOperator: prepareEnumQueryParam(filterOperator),
        filterValue: filterValue || undefined,
        orderByName,
        orderByQuantity,
        orderByDistance
      }
    })
    .then(response => response.data)
    .catch(() => {
      console.warn('Bad Response')
      return [] as DataRow[]
    })

const prepareEnumQueryParam = (param?: string) =>
  param ? param.replace(' ', '') : undefined
