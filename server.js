var http = require('http')
var greeting = '<h1>Greeting<h1>' + '<p>Hello there, welcome.</p>'

// Create a new server that just says "Hi!!" at every route

var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Home</h1>' + greeting +
      '<img src="https://i.imgur.com/jKhQJVH.jpg" alt="Waving hi">'
    )
  } else if (request.url === '/random-joke') {
    document.write('<h1>A Random Joke</h1>')
    function getRandomInt (min, max) {
      return Math.round(Math.random() * (max - min)) + min
    }
    var jokeRandom = (Math.floor(Math.random() * 3) + 1)
    if (jokeRandom === 1) {
      document.write('<p>Can a kangaroo jump higher than a house?</p> + <p> Of course, a house doesn’t jump at all.</p>')
    } else if (jokeRandom === 2) {
      document.write('<p>What is the strongest creature in the world?</p> + <p> The snail. It carries its whole house on its back.</p>')
    } else if (jokeRandom === 3) {
      response.write(rnd)('<p>Knock knock.</p> + <p>Who/s there?</p> + <p>Beats.</p> + <p>Beats who?</p> + <p>Beats me.</p>')
    response.end(<a href="/">Home</a>)
  } else if (request.url === '/cutness') {
    document.write('<h1>Cuteness</h1>' + '<img src="http://i.imgur.com/CmQeX3X.jpg" alt="Sleeping Dog">')
    response.end(<a href="/">Home</a>)
  } else {
    document.write('<h1>The URL was not found on the server</h1>')
    response.end('<h1>Page Not Found</h1>' + '<p>' + request.url + 'not found. <a href="/">Home</a></p>')
  }
})
// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
