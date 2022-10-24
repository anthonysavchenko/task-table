import CSS from 'csstype'

import { Color } from '../../constants'

export const root: CSS.Properties = {
  padding: '12px 10px',
  minWidth: 0,

  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  color: Color.Primary100
}

export const rootSelected: CSS.Properties = {
  backgroundColor: Color.Primary300
}

export const rootHover: CSS.Properties = {
  backgroundColor: Color.Primary300,
  cursor: 'pointer'
}
