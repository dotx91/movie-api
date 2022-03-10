const movies = require('./data/movies')

const result = movies.sort((a, b) => {
    return a.vote_average - b.vote_average
})

console.log(result)