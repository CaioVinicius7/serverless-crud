import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayProxyHandler } from "aws-lambda";

import { document } from "src/utils/dynamodbClient";

const deleteUser: APIGatewayProxyHandler = async (event) => {
  const { id } = event.pathParameters;

  const response = await document
    .get({
      TableName: "users",
      Key: {
        id
      }
    })
    .promise();

  const userExists = response.Item;

  if (!userExists) {
    return formatJSONResponse(404, {
      message: "User not exists!"
    });
  }

  await document
    .delete({
      TableName: "users",
      Key: {
        id
      }
    })
    .promise();

  return formatJSONResponse(200, {
    message: "User deleted!"
  });
};

export const main = middyfy(deleteUser);
