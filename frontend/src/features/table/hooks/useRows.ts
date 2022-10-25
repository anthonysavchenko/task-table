import React from 'react'

import { DataRow } from '../types'

export const useRows = () => {
  const [rows, setRows] = React.useState<DataRow[]>([])

  React.useEffect(() => void (async () => setRows(await getServerData()))(), [])

  return rows
}

const getServerData = async () =>
  await fetch(process.env.REACT_APP_API_URL ?? '')
    .then((response: Response) => response.json())
    .then(json => json as DataRow[])
