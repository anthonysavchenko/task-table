const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
})

const getRows = (request, response) => {
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

const query = `
SELECT
  id,
  TO_CHAR(row_date, 'mm/dd/yyyy') AS date,
  row_name AS name,
  quantity,
  distance
FROM
  rows
`
