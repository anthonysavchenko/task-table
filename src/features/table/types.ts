export interface DataRow {
  id: number
  date: string
  name: string
  quantity: number
  distance: number
}

export type OrderBy = 'ascending' | 'descending'
