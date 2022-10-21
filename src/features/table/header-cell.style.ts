import CSS from 'csstype'

import { Color } from '../../constants'

export const root: CSS.Properties = {
  flex: 1,
  padding: '12px 10px',
  display: 'flex',
  justifyContent: 'center'
}

export const rootHover: CSS.Properties = {
  backgroundColor: Color.Primary300,
  cursor: 'pointer'
}

export const icon: CSS.Properties = {
  marginTop: '-1px',
  marginRight: '5px',

  fontWeight: 'bold',
  color: Color.Primary100
}

export const title: CSS.Properties = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  fontWeight: 'bold',
  color: Color.Primary100
}
