const db = require('./models')

db.movie.findOrCreate({
    where: { title: "Godfather" },
    defaults: {
        headline: "The Godfather (Movie)",
        byline: "Vincent Canby",
        date: Date.now(),
        url: "http://nytimes.com"
    }
}).then(([movie, created]) => {
    console.log(created)
    console.log(movie)
}).catch(error => {
    console.log(error)
})