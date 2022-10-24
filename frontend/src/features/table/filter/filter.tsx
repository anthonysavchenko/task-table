import React from 'react'

import { Option, Select } from '../../../components/select'
import { FilterColumn, FilterOperator } from '../types'
import { label, root, valueInput, valueInputEmpty } from './filter.style'

export interface FilterProps {
  column?: FilterColumn
  operator?: FilterOperator
  value: string
  onColumnSelect(column?: FilterColumn): void
  onOperatorSelect(operator?: FilterOperator): void
  onValueChange(value: string): void
}

const Filter: React.FC<FilterProps> = React.memo<FilterProps>(
  ({
    column,
    operator,
    value,
    onColumnSelect,
    onOperatorSelect,
    onValueChange
  }: FilterProps) => (
    <div style={root}>
      <span style={label}>Filter:</span>
      <Select
        value={column}
        placeholder="Select a column"
        onSelect={onColumnSelect}
      >
        <Option>
          <i>{'None'}</i>
        </Option>
        {Object.values(FilterColumn).map(x => (
          <Option key={x} value={x}>
            {x}
          </Option>
        ))}
      </Select>
      <Select
        value={operator}
        placeholder="Select an operator"
        onSelect={onOperatorSelect}
      >
        <Option>
          <i>{'None'}</i>
        </Option>
        {Object.values(FilterOperator).map(x => (
          <Option key={x} value={x}>
            {x}
          </Option>
        ))}
      </Select>
      <input
        style={{ ...valueInput, ...(!value && valueInputEmpty) }}
        type="text"
        value={value}
        placeholder="Enter a value"
        onChange={event => onValueChange(event.target.value)}
      />
    </div>
  )
)

Filter.displayName = 'Filter'
export { Filter }
