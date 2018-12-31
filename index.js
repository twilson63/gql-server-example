const { gql, ApolloServer } = require('apollo-server')

let data = []

const typeDefs = gql`
  type Movie {
    title: String!
    year: String!
    rating: String 
  }

  type Query {
    movies: [Movie]
  }
`

const resolvers = {
  Query: {
    movies: () => data 
  }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => console.log(`Listening on ${url}`))




