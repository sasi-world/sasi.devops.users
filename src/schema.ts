const schema: String = `

type Socials {
     name: String
     url: String
}
type User {
     ID: String
     name: String
     suname: String
     email: String
     type: String
     socialAcounts: [Socials]
}

"""
A hello world Query
"""
type Query {
     hello: String!
}

`;

export { schema };
