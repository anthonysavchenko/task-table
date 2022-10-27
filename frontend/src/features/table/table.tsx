import React from 'react'

import { Filter } from './filter'
import { Header } from './header'
import { useFiltration, usePagination, useSorting } from './hooks'
import { useRows } from './hooks/useRows'
import { Paginator } from './paginator'
import { Row } from './row'
import { root } from './table.style'

export interface TableProps {
  rowsPerPage?: number
  pagesNearActive?: number
}

export const Table: React.FC<TableProps> = ({
  rowsPerPage,
  pagesNearActive
}) => {
  const [
    filterColumn,
    filterOperator,
    filterValue,
    handleFilterColumnSelect,
    handleFilterOperatorSelect,
    handleFilterValueSelect
  ] = useFiltration()

  const rows = useRows(filterColumn, filterOperator, filterValue)

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
      <Filter
        column={filterColumn}
        operator={filterOperator}
        value={filterValue}
        onColumnSelect={handleFilterColumnSelect}
        onOperatorSelect={handleFilterOperatorSelect}
        onValueChange={handleFilterValueSelect}
      />
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
        pagesNearActive={pagesNearActive}
        onPageSelect={handlePageSelect}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </section>
  )
}
