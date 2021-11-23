"use strict"

const express = require('express')
const router = express.Router()
const utils = require('../db/utils')

router.get('/', (req, res) => {
    const message = `hello to my sample flask app, I have been seen ${getHitCount()} times\n`
    res.render(`index`, {
        myTitle : 'Counter',
        content : message
    })
})

const getHitCount = () => {
    utils.executeQuery(`INSERT INTO hit(dummy) VALUES(1)`, (result1) => {
        console.log(result1)
        utils.executeQuery(`SELECT MAX(number) FROM hit`, (result2) => {
            console.log(result2)
            return result2.toString()
        })
    })
}

module.exports = router