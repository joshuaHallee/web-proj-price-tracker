const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const Search = require('../models/Search')
const router = express.Router()

// require site configurations
const amazon = require('../sites/amazon');

// init scrape method
async function scrapePage(requestUrl) {
  const html = await amazon.getHTML(requestUrl);
  const amazonPrice = await amazon.getAmazonPrice(html);
  console.log(`The price is ${amazonPrice}`);
}

router.post('/', async(req, res) => {

    requestUrl = req.body.websiteUrl

    try {
      scrapePage(requestUrl)
    } catch (err) {
      console.log(err)
    }
    
})

module.exports = router