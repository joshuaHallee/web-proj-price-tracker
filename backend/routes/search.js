const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const Search = require('../models/Search')
const router = express.Router()

router.get('/', async(req, res) => {
    try {
        res.send(`${res.statusCode} search!`)
    } catch (err) {
        res.status(500).json({ message: err })
    }
})

router.post('/', async(req, res) => {
    websiteUrl = req.body.websiteUrl

    let config = {
        headers: {
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
            "Accept-Language": "en-US,en;q=0.5",
            "Referer": "https://www.google.com/"
        }
    }

    getUrl(websiteUrl, config)
})

async function getUrl(websiteUrl, config) {
    try {
        axios.get(
            `${websiteUrl}`,
            config
        )
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

module.exports = router