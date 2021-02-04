const schema = `

type User {
     ID: String
     name: String
     suname: String
     email: String
     type: String
}

"""
A hello world Query
"""
type Query {
     hello: String!
}

`;

export { schema };
