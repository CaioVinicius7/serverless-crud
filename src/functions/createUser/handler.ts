import {
  formatJSONResponse,
  ValidatedEventAPIGatewayProxyEvent
} from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { v4 as uuidV4 } from "uuid";

import { document } from "src/utils/dynamodbClient";
import { schema } from "./schema";

interface ICreateNewUser {
  name: string;
  email: string;
  address: string;
  phone: number;
}

const createUser: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const { name, email, address, phone }: ICreateNewUser = event.body;

  await document
    .put({
      TableName: "users",
      Item: {
        id: uuidV4(),
        name,
        email,
        address,
        phone,
        created_at: new Date().getTime()
      }
    })
    .promise();

  return formatJSONResponse(201, {
    message: "User Created!"
  });
};

export const main = middyfy(createUser);
