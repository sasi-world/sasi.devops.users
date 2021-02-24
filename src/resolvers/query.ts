import * as dynamoDB from "../../libs/dynamoDB";
export const hello = (args: any, context: any) => {
  return "Your GraphQL API is now LIVE!🎈 ";
};

export const getUsers = async (args: any, context: any) => {
  const params: object = {
    TableName: process.env.UsersDB,
  };
  try {
    const users = await dynamoDB.default.scan(params);
    return users.Items;
  } catch (e) {
    throw new Error(e);
  }
};
