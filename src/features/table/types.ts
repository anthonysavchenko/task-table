export interface DataRow {
  id: number
  date: number
  name: string
  quantity: number
  distance: number
}

export type OrderBy = 'ascending' | 'descending'
