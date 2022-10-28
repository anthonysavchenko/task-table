const getOrderBySubstring = (orderByName, orderByQuantity, orderByDistance) =>
  getOrderByColumnSubstring(orderByName, 'row_name') ||
  getOrderByColumnSubstring(orderByQuantity, 'quantity') ||
  getOrderByColumnSubstring(orderByDistance, 'distance') ||
  ''

module.exports = {
  getOrderBySubstring
}

const getOrderByColumnSubstring = (orderBy, columnName) => {
  switch (orderBy) {
    case 'ascending':
      return `ORDER BY ${columnName}`
    case 'descending':
      return `ORDER BY ${columnName} DESC`
  }
}
