import React from 'react'

import { DataRow } from '../types'

export const usePagination = (rows: DataRow[], rowsPerPage?: number) => {
  const pageRowsQuantity = rowsPerPage && rowsPerPage >= 1 ? rowsPerPage : 1
  const pageQuantity = Math.ceil(rows.length / pageRowsQuantity)

  const [page, setPage] = React.useState(1)

  const handlePageSelect = React.useCallback(
    (page: number) => setPage(page),
    []
  )

  const handleNextPage = React.useCallback(
    () => setPage(prev => (page === pageQuantity ? prev : prev + 1)),
    [page, pageQuantity]
  )

  const handlePrevPage = React.useCallback(
    () => setPage(prev => (page === 1 ? prev : prev - 1)),
    [page]
  )

  const pageStart = (page - 1) * pageRowsQuantity
  const pageEnd = pageStart + pageRowsQuantity

  const pageRows = rows.slice(pageStart, pageEnd)

  return [
    page,
    pageQuantity,
    pageRows,
    handlePageSelect,
    handleNextPage,
    handlePrevPage
  ] as const
}
