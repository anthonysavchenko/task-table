import React from 'react'

export const useHover = () => {
  const [hover, setHover] = React.useState(false)
  const handleMouseEnter = React.useCallback(() => setHover(true), [])
  const handleMouseLeave = React.useCallback(() => setHover(false), [])
  return [hover, handleMouseEnter, handleMouseLeave] as const
}
