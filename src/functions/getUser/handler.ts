import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayProxyHandler } from "aws-lambda";

import { document } from "src/utils/dynamodbClient";

const getUser: APIGatewayProxyHandler = async (event) => {
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
      message: "User does not exists!"
    });
  }

  return formatJSONResponse(200, {
    user: userExists
  });
};

export const main = middyfy(getUser);
