import React from 'react'

import { useHover } from '../../hooks'
import { root, rootHover, rootSelected } from './option.style'

export interface OptionProps {
  value?: string
  selected?: boolean
  children: React.ReactNode
  onSelect?(value?: string): void
}

const Option: React.FC<OptionProps> = React.memo<OptionProps>(
  ({ value, selected, onSelect, children }: OptionProps) => {
    const handleClick = !onSelect
      ? undefined
      : (event: React.MouseEvent) => {
          event.preventDefault()
          onSelect(value)
        }

    const [hover, handleMouseEnter, handleMouseLeave] = useHover()

    return (
      <div
        style={{
          ...root,
          ...(selected && rootSelected),
          ...(hover && rootHover)
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {children}
      </div>
    )
  }
)

Option.displayName = 'Option'
export { Option }
