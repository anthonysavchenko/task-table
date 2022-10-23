import CSS from 'csstype'

import { Color } from '../../../constants'

export const root: CSS.Properties = {
  display: 'flex',
  marginBottom: '50px'
}

export const label: CSS.Properties = {
  height: '100%',
  padding: '14px 20px 14px 0',

  fontSize: '16px',
  color: Color.Primary100
}

export const valueInput: CSS.Properties = {
  flex: 1,
  height: '100%',
  marginLeft: '15px',
  padding: '12px 10px',

  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: Color.Primary300,

  fontFamily: 'inherit',
  fontSize: '16px',
  color: Color.Primary100,

  backgroundColor: Color.Primary1000
}

export const valueInputEmpty: CSS.Properties = {
  fontStyle: 'italic'
}
