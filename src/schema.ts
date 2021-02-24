const schema: string = `

type Socials {
     name: String
     url: String
}
type User {
     ID: String!
     username: String!
     name: String!
     suname: String!
     email: String!
     type: String!
     socialAccounts: [Socials]
}

"""
A hello world Query
"""
type Query {
     hello: String!
     getAUser(ID:String!): User
     getUsers: [User]!
}

`;

export { schema };
