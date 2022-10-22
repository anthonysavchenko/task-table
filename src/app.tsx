import React from 'react'

import { root } from './app.style'
import { Table } from './features/table'

const App: React.FC = () => (
  <main style={root}>
    <Table rowsPerPage={5} />
  </main>
)

export default App
