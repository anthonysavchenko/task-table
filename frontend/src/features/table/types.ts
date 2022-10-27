export interface DataRow {
  id: number
  date: string
  name: string
  quantity: number
  distance: number
}

export enum FilterColumn {
  Name = 'Name',
  Quantity = 'Quantity',
  Distance = 'Distance'
}

export enum FilterOperator {
  Equals = 'Equals',
  LessThan = 'Less Than',
  GreaterThan = 'Greater Than',
  Containes = 'Contains'
}

export type OrderBy = 'ascending' | 'descending'
