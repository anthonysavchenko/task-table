import CSS from 'csstype'

import { Color } from '../../../constants'

export const root: CSS.Properties = {
  flex: 1,
  padding: '6px 10px',

  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  textAlign: 'center',
  color: Color.Primary100
}
