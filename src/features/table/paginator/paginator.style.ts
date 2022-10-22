import CSS from 'csstype'

import { Color } from '../../../constants'

export const root: CSS.Properties = {
  display: 'flex',
  justifyContent: 'center',

  marginTop: '15px',

  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: Color.Primary300
}

export const separator: CSS.Properties = {
  flex: 1,
  padding: '12px 10px',
  minWidth: 0,
  maxWidth: '50px',

  textAlign: 'center',
  color: Color.Primary100,

  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap'
}
