import React from 'react'

import { root } from './app.style'
import { Table } from './features/table'

const App: React.FC = () => (
  <main style={root}>
    <Table rowsPerPage={5} pagesNearActive={2} />
  </main>
)

export default App
