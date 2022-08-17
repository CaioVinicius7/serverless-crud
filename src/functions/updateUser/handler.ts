import {
  formatJSONResponse,
  ValidatedEventAPIGatewayProxyEvent
} from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import { document } from "src/utils/dynamodbClient";
import { schema } from "./schema";

interface IUpdateUser {
  name?: string;
  email?: string;
  address?: string;
  phone?: number;
}

const updateUser: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const { id } = event.pathParameters;
  const { name, email, address, phone }: IUpdateUser = event.body;

  await document
    .update({
      TableName: "users",
      Key: {
        id
      },
      UpdateExpression:
        "set #n = :name, email = :email, address = :address, phone = :phone",
      ExpressionAttributeValues: {
        ":name": name,
        ":email": email,
        ":address": address,
        ":phone": phone
      },
      ExpressionAttributeNames: {
        "#n": "name"
      }
    })
    .promise();

  return formatJSONResponse(200, {
    message: "User successfully updated!"
  });
};

export const main = middyfy(updateUser);
