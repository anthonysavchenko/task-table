import CSS from 'csstype'

import { Color } from '../../../constants'

export const root: CSS.Properties = {
  flex: 1,
  padding: '12px 10px',
  minWidth: 0,
  maxWidth: '50px',

  fontWeight: 'bold',
  textAlign: 'center',
  color: Color.Primary100,

  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap'
}

export const rootActive: CSS.Properties = {
  backgroundColor: Color.Primary300
}

export const rootHover: CSS.Properties = {
  backgroundColor: Color.Primary300,
  cursor: 'pointer'
}

export const rootNoPageNumber: CSS.Properties = {
  fontSize: '24px',
  lineHeight: 0.75
}
