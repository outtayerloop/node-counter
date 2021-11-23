const mysql = require('mysql')
const fs = require('fs')

//Import du fichier avec les commandes SQL
const dbFilePath = `${__dirname}/populate.sql`
const sql = fs.readFileSync(dbFilePath).toString()

//Initialisation de la connexion
const client = mysql.createConnection({
    user: 'root',
    host:'localhost',
    database:'counter-db',
    password:'wiem',
    port:8080,
  })
  
client.connect()

//Execution des commandes SQL
client.query(sql, (err,res)=>{
    if(err){
        console.log(res)
    }
    else{
        console.log("Successful import")
    }
    client.end()
})