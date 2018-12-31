# Apollo GraphQL Server Demo

This is a simple demo of a basic graphql server, step by step.

## Create project and install dependencies

```
mkdir myproject
cd myproject
yarn init -y
yarn add graphql apollo-server
```

## Create index.js

``` js
const { gql, ApolloServer } = require('apollo-server')

let data = []

const typeDefs = gql`
`

const resolvers = {

}

const server = new ApolloServer({ typeDefs, resolvers})
server.listen().then(({url}) => console.log(`Server is running at ${url}`)) 
```

## Add Data

``` js
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
```

## Add types 

```
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
```

## Add resolvers

```
const resolvers = {
  Query: {
    movies: () => data 
  }
}
```

## Run Server

```
node index.js
```

## Add Mutation Type

```
type Mutation {
  createMovie(title: String!, year: String!, rating: String): Movie
}
```

## Add Mutation Resolver

```
Mutation: {
  createMovie: (parent, movie) => {
    data = [...data, movie]
    return movie
  }
}
```


`
```
