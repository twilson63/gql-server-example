const { gql, ApolloServer } = require('apollo-server')

let data = [
  {
    title: 'Ghostbusters',
    year: '1984',
    rating: 'PG'
  },
  {
    title: 'Groundhog Day',
    year: '1993',
    rating: 'PG'
  }
]

const typeDefs = gql`
  type Movie {
    title: String!
    year: String!
    rating: String 
  }

  type Query {
    movies: [Movie]
  }

  type Mutation {
    createMovie(title: String!, year: String!, rating: String): Movie
  }
`

const resolvers = {
  Query: {
    movies: () => data 
  },
  Mutation: {
    createMovie: (parent, {title, year, rating}) => {
      data = [...data, {title, year, rating}]
      return {title, year, rating}
    }
  }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => console.log(`Listening on ${url}`))




