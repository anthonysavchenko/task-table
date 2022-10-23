import CSS from 'csstype'

import { Color } from '../../constants'

export const root: CSS.Properties = {
  flex: 1,
  margin: '0 15px',
  position: 'relative'
}

export const button: CSS.Properties = {
  display: 'flex',
  padding: '12px 10px',

  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: Color.Primary300
}

export const buttonHover: CSS.Properties = {
  cursor: 'pointer'
}

export const label: CSS.Properties = {
  flex: 'auto',

  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  color: Color.Primary100
}

export const iconContainer: CSS.Properties = {
  flex: 'none',
  width: '25px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export const icon: CSS.Properties = {
  width: '5px',
  height: '5px',

  borderRightStyle: 'solid',
  borderBottomStyle: 'solid',
  borderRightWidth: '2px',
  borderBottomWidth: '2px',
  borderRightColor: Color.Primary100,
  borderBottomColor: Color.Primary100,

  transform: 'rotate(45deg)'
}

export const iconUp: CSS.Properties = {
  transform: 'rotate(225deg)'
}

export const labelPlaceholder: CSS.Properties = {
  fontStyle: 'italic',
  color: 'rgba(172, 161, 209, 0.5)'
}

export const dropdown: CSS.Properties = {
  position: 'absolute',
  width: '100%',
  maxHeight: '300px',

  overflow: 'hidden auto',

  background: Color.Primary1000,
  boxShadow: '0 3px 12px rgba(172, 161, 209, 0.2)'
}
