const { getFilterSubstring } = require('./filteration')
const { getOrderBySubstring } = require('./sorting')

const NO_SPECIAL_CHARS_REG_EX = /[^a-zA-Z0-9\s]/g

const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
})

const getRows = (request, response) => {
  const filterColumn = prepareQueryParam(request.query.filterColumn)
  const filterOperator = prepareQueryParam(request.query.filterOperator)
  const filterValue = prepareQueryParam(request.query.filterValue)
  const orderByName = request.query.orderByName
  const orderByQuantity = request.query.orderByQuantity
  const orderByDistance = request.query.orderByDistance
  const query = getQuery(
    filterColumn,
    filterOperator,
    filterValue,
    orderByName,
    orderByQuantity,
    orderByDistance
  )

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

const prepareQueryParam = param => {
  if (param) {
    return param.replace(NO_SPECIAL_CHARS_REG_EX, '') || undefined
  }
}

const getQuery = (
  filterColumn,
  filterOperator,
  filterValue,
  orderByName,
  orderByQuantity,
  orderByDistance
) => {
  const where = getFilterSubstring(filterColumn, filterOperator, filterValue)
  const order = getOrderBySubstring(
    orderByName,
    orderByQuantity,
    orderByDistance
  )

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
${order}
`
  return query
}
