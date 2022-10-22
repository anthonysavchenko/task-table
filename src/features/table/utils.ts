type TDataRowProp = string | number

export const sortAscending = (a: TDataRowProp, b: TDataRowProp) =>
  a < b ? -1 : 1

export const sortDescending = (a: TDataRowProp, b: TDataRowProp) =>
  b < a ? -1 : 1
