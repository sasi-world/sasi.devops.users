import { hello, getUsers } from "./query";
import { IResolvers } from "graphql-tools/dist/Interfaces";
export const resolvers: IResolvers = {
  Query: {
    hello: (root: any, args: any, context: any) => hello(args, context),
    getUsers: (root: any, args: any, context: any) => getUsers(args, context),
  },
};
