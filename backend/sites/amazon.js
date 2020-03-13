const axios = require('axios')
const cheerio = require('cheerio')

async function getHTML(productURL) {
    const { data: html } = await axios.get(productURL, {
        headers: {
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
            "Accept-Language": "en-US,en;q=0.5",
            "Referer": "https://www.google.com/"
        }
    })
    .catch(function (error) {
        console.log(error);
    })
    return html;
}

async function getAmazonPrice(html) {
    // taken from https://www.thedevnotebook.com/2019/05/web-scraping-for-amazon-prices.html
    // const $ = cheerio.load(html)
    // const span = $('#priceblock_ourprice')
    // return span.html();

    // loads response into cheerio
    let $ = cheerio.load(html)

    let product = []
    $('.s-result-list.s-search-results.sg-row').children().each(function(i, elm) {

        let itemName = $(this).find('.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2 .a-size-medium.a-color-base.a-text-normal').text()
        let itemPrice = $(this).find('.a-size-base.a-link-normal.s-no-hover.a-text-normal .a-price .a-offscreen').text()
        // let itemPrice = $(this).find('.a-size-base.a-link-normal.s-no-hover.a-text-normal').data('<span data-a-size="l"></span>')
        console.log(`Item ${i}: ${itemName} \n ${itemPrice} \n\n`)
       
        
    })

    // let price
    // $('.s-result-list.s-search-results.sg-row .a-size-base.a-link-normal.s-no-hover.a-text-normal').each(function(i, elm) {
    //     // console.log($(this).first('.a-price').html())
    //     console.log( 
    //         $(this).find('.a-price .a-offscreen').first().text()
    //     )
    // })

    //gets container of results
    // let resp
    // $('.s-search-results').each(function(i, elm) {
    //     resp = $(this).html()
    // })

    // let resp2
    // $('.s-search-results .a-price').each(function(i, elm) {
    //     if(elm.attribs.class === 'a-price') {
    //         // console.log('primary')
    //         console.log('primary ' + i)
    //         resp2 += $(elm).text()
    //     } else {
    //         console.log('secondary')
    //     }
    // })
    // return resp2
    // res.send(resp2)
    // let resp = $('body .s-search-results').html()
    // let page = $.root()
    // let body = page.find('body').html()
    // let results = body.find('.s-result-list.s-search-results.sg-row').html()
}

module.exports = {
    getHTML,
    getAmazonPrice
}