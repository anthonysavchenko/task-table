const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
})

const getRows = (request, response) => {
  const filterColumn = request.query.filterColumn
  const filterOperator = request.query.filterOperator
  const filterValue = request.query.filterValue
  const query = getQuery(filterColumn, filterOperator, filterValue)

  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getRows
}

const getQuery = (filterColumn, filterOperator, filterValue) => {
  const where = getFilterSubstring(filterColumn, filterOperator, filterValue)

  if ((filterColumn || filterOperator || filterValue) && !where) {
    return ''
  }

  const query = `
SELECT
  id,
  TO_CHAR(row_date, 'mm/dd/yyyy') AS date,
  row_name AS name,
  quantity,
  distance
FROM
  rows
  ${where}
`
  return query
}

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
      return filterColumn
    case 'Quantity':
    case 'Distance':
      return filterOperator === 'Contains'
        ? `${filterColumn}::TEXT`
        : filterColumn
  }
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
