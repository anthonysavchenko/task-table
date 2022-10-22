import React from 'react'

import { rows } from './constants'
import { Header } from './header'
import { usePagination, useSorting } from './hooks'
import { Paginator } from './paginator'
import { Row } from './row'
import { root } from './table.style'

export interface TableProps {
  rowsPerPage?: number
}

export const Table: React.FC<TableProps> = ({ rowsPerPage }) => {
  const [
    sortedRows,
    orderByName,
    orderByQuantity,
    orderByDistance,
    handleOrderByName,
    handleOrderByQuantity,
    handleOrderByDistance
  ] = useSorting(rows)

  const [
    page,
    pageQuantity,
    pageRows,
    handlePageSelect,
    handleNextPage,
    handlePrevPage
  ] = usePagination(sortedRows, rowsPerPage)

  return (
    <section style={root}>
      <Header
        orderByName={orderByName}
        orderByQuantity={orderByQuantity}
        orderByDistance={orderByDistance}
        onOrderByName={handleOrderByName}
        onOrderByQuantity={handleOrderByQuantity}
        onOrderByDistance={handleOrderByDistance}
      />
      {pageRows.map((x, index) => (
        <Row key={x.id} rowNumber={index + 1} data={x} />
      ))}
      <Paginator
        page={page}
        pageQuantity={pageQuantity}
        onPageSelect={handlePageSelect}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </section>
  )
}
