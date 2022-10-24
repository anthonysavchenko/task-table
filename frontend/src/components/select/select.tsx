import * as React from 'react'

import { useHover } from '../../hooks'
import { Option, OptionProps } from './option'
import {
  button,
  buttonHover,
  dropdown,
  icon,
  iconContainer,
  iconUp,
  label,
  labelPlaceholder,
  root
} from './select.style'

type ReactOptionElement = React.ReactElement<OptionProps, typeof Option>

export interface SelectProps {
  value?: string
  placeholder: React.ReactNode
  children: React.ReactNode
  onSelect(value?: string): void
}

const Select: React.FC<SelectProps> = React.memo<SelectProps>(({
  value,
  placeholder,
  children,
  onSelect
}: SelectProps) => {
  const [isOpen, setOpen] = React.useState(false)
  const selectRef = React.useRef<HTMLDivElement>(null)

  const handleButtonClick = (event: React.MouseEvent) => {
    event.preventDefault()
    setOpen(isOpen => !isOpen)
  }

  const handleSelect = React.useCallback(
    (optionValue: string) => {
      setOpen(false)
      onSelect(optionValue)
    },
    [onSelect]
  )

  const selectedOption = React.useMemo(
    () => getFirstSelectedOption(children, value),
    [children, value]
  )

  const [hover, handleMouseEnter, handleMouseLeave] = useHover()

  return (
    <div style={root} ref={selectRef}>
      <div
        style={{ ...button, ...(hover && buttonHover) }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleButtonClick}
      >
        <div style={label}>
          {selectedOption ? (
            selectedOption.props.children
          ) : (
            <span style={labelPlaceholder}>{placeholder}</span>
          )}
        </div>
        <div style={iconContainer}>
          <span style={{ ...icon, ...(isOpen && iconUp) }} />
        </div>
      </div>
      {isOpen && (
        <div style={dropdown}>
          {React.Children.map(children, option => {
            if (isOptionElement(option)) {
              return React.cloneElement(option, {
                key: option.key,
                selected: isOptionSelected(option, value),
                onSelect: handleSelect
              })
            }

            return option
          })}
        </div>
      )}
    </div>
  )
})

Select.displayName = 'Select'
export { Select }

const getFirstSelectedOption = (
  selectChildren: React.ReactNode,
  selectValue?: string
): ReactOptionElement | null => {
  let selectedOption: ReactOptionElement | null = null

  React.Children.forEach(selectChildren, option => {
    if (
      !selectedOption &&
      isOptionElement(option) &&
      isOptionSelected(option, selectValue)
    ) {
      selectedOption = option
    }
  })

  return selectedOption
}

const isOptionElement = (
  element: React.ReactNode
): element is ReactOptionElement =>
  React.isValidElement(element) && element.type === Option

const isOptionSelected = (
  option: ReactOptionElement,
  selectValue?: string
): boolean =>
  selectValue === undefined
    ? !!option.props.selected
    : option.props.value === selectValue
