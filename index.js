// Dependencies
require('dotenv').config()
const express = require('express')
const axios = require('axios')
const ejsLayouts = require('express-ejs-layouts')
const { default: Axios } = require('axios')

// Initiate app
const app = express()

// Set up port
const PORT = process.env.PORT || 3000

// Store variable from ENV
const NYT_API_KEY = process.env.NYT_API_KEY

// Set up EJS engine
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// Create a home route
app.get('/', (req, res) => {
    axios
        .get(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=${NYT_API_KEY}`)
        .then(response => {
            if (response.status === 200) {
                let len = response.data.results.length
                for (let i = 0; i < len; i++) {
                    let movieResultObject = response.data.results[i]
                    const finalObject = {
                        title: movieResultObject.display_title,
                        headline: movieResultObject.headline,
                        byline: movieResultObject.byline,
                        date: movieResultObject.publication_date,
                        url: movieResultObject.link.url
                    }
                    console.log(finalObject);
                }
            }
        })
        .catch(error => {
            console.log(error)
        })
    // res.send('Welcome to the backend!')
})

// Listen
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})