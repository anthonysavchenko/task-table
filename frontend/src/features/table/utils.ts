import { OrderBy } from './types'

type TDataRowProp = string | number

export const sortAscending = (a: TDataRowProp, b: TDataRowProp) =>
  a < b ? -1 : 1

export const sortDescending = (a: TDataRowProp, b: TDataRowProp) =>
  b < a ? -1 : 1

export const toggleOrderBy = (orderBy?: OrderBy): OrderBy | undefined => {
  switch (orderBy) {
    case 'ascending':
      return 'descending'
    case 'descending':
      return
    default:
      return 'ascending'
  }
}
