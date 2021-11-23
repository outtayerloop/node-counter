'use strict';

const express = require('express');
const mysql = require('mysql')
const fs = require('fs')

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    const message = `hello to my sample flask app, I have been seen ${getHitCount()} times\n`
    res.send(message);
});

const getHitCount = () => {
    const client = mysql.createConnection({
        user: 'root',
        host:'mysql',
        database:'counter-db',
        password:'wiem'
    })
    client.connect((err) => {
        if(err) {
            console.log(err)
            return err.message
        }
        else{
            console.log('no connection error')
            client.query(`INSERT INTO hit(dummy) VALUES(1)`, (err, result1) => {
                if(err){
                    console.log(err)
                    return err.message
                }
                else{
                    console.log(result1)
                    client.query(`SELECT MAX(number) FROM hit`, (err, result2) => {
                        if(err){
                            console.log(err)
                            return err.message
                        }
                        else{
                            console.log(result2)
                            return result2.toString()
                        }
                    })
                }
            })
        }
    })
}

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
    const dbFilePath = `${__dirname}/populate.sql`
    const sql = fs.readFileSync(dbFilePath).toString()
    const client = mysql.createConnection({
        user: 'root',
        host:'mysql',
        database:'mysql',
        password:'wiem'
    })
    client.connect((err) => {
        if(err) {
            console.log(err)
        }
        else{
            console.log('no connection error')
            client.query(sql, (err) => {
                console.log(err)
            })
        }
    })
});