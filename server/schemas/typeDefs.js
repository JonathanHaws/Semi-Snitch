const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Idle {
    _id: ID!
    startTime: String
    endTime: String
    driverName: String
    vehicle: String
    idleMinutes: Float
    city: String
    state: String
    lat: Float
    long: Float
  }



  type Query {
    idle: [Idle]
 
  }


`;

module.exports = typeDefs;