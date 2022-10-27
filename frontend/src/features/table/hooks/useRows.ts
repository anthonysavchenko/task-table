import React from 'react'

import axios from 'axios'

import { DataRow } from '../types'

export const useRows = () => {
  const [rows, setRows] = React.useState<DataRow[]>([])

  React.useEffect(() => void (async () => setRows(await getServerData()))(), [])

  return rows
}

const getServerData = async () =>
  await axios
    .get<DataRow[]>(process.env.REACT_APP_API_URL ?? '')
    .then(response => response.data)
    .catch(() => {
      console.warn('Bad Response')
      return [] as DataRow[]
    })
