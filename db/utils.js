const mysql = require('mysql')

const utils = {}

utils.getClient = () => {
  return mysql.createConnection({
    user: 'root',
    host:'localhost',
    database:'counter-db',
    password:'wiem',
    port:8080,
  })
}

utils.executeQuery = (sql, callback) => {
  client = utils.getClient()
  // 1. Connection
  client.connect((err) => {
    if(err) {
      console.error('error fetching client connection', err)
      return;
    }
    else
      console.log(`client connected`)
    // 2. Execute the query
    client.query(sql, (err, result) => {
      // 3. Close Connection
      done()
      if (err) {
        console.log(err)
      }
      else {
        // 4. Execute the callback(res)
        callback(result)
      }
    })
  })
}

module.exports = utils