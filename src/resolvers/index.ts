import { hello, getUsers, getAUser } from "./query";
import { IResolvers } from "graphql-tools/dist/Interfaces";
export const resolvers: IResolvers = {
  Query: {
    hello: (root: any, args: any, context: any) => hello(args, context),
    getUsers: (root: any, args: any, context: any) => getUsers(args, context),
    getAUser: (root: any, args: any, context: any) => getAUser(args, context),
  },
};
