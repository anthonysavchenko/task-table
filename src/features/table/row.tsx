import { Cell } from './cell'
import { odd, root } from './row.style'
import { DataRow } from './types'

export interface RowProps {
  rowNumber: number
  data: DataRow
}

export const Row: React.FC<RowProps> = ({ rowNumber, data }: RowProps) => (
  <div style={{ ...root, ...(rowNumber % 2 > 0 && odd) }}>
    <Cell>{data.date}</Cell>
    <Cell>{data.name}</Cell>
    <Cell>{data.quantity}</Cell>
    <Cell>{data.distance}</Cell>
  </div>
)
