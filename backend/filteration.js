const getFilterSubstring = (filterColumn, filterOperator, filterValue) => {
  const filterColumnString = getFilterColumnString(filterColumn, filterOperator)

  if (!filterColumnString) {
    return
  }

  const filterOperatorString = getFilterOperatorString(filterOperator)

  if (!filterOperatorString) {
    return
  }

  const filterValueString = getFilterValueString(
    filterColumn,
    filterOperator,
    filterValue
  )

  if (!filterValueString) {
    return
  }

  return `WHERE ${filterColumnString} ${filterOperatorString} ${filterValueString}`
}

const getFilterColumnString = (filterColumn, filterOperator) => {
  switch (filterColumn) {
    case 'Name':
      return 'row_name'
    case 'Quantity':
    case 'Distance':
      return filterOperator === 'Contains'
        ? `${filterColumn.toLowerCase()}::TEXT`
        : filterColumn.toLowerCase()
  }
}

module.exports = {
  getFilterSubstring
}

const getFilterOperatorString = filterOperator => {
  switch (filterOperator) {
    case 'Equals':
      return '='
    case 'LessThan':
      return '<'
    case 'GreaterThan':
      return '>'
    case 'Contains':
      return 'LIKE'
  }
}

const getFilterValueString = (filterColumn, filterOperator, filterValue) => {
  if (!filterValue) {
    return
  }

  if (filterColumn === 'Quantity' || filterColumn === 'Distance') {
    const castedFilterValue = parseInt(filterValue)

    if (isNaN(castedFilterValue)) {
      return
    }

    return filterOperator === 'Contains'
      ? `'%${castedFilterValue}%'`
      : `${castedFilterValue}`
  }

  return filterOperator === 'Contains'
    ? `'%${filterValue}%'`
    : `'${filterValue}'`
}
