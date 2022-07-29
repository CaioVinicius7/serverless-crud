import { APIGatewayProxyHandler } from "aws-lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import { document } from "src/utils/dynamodbClient";

const getUsers: APIGatewayProxyHandler = async () => {
  const response = await document
    .scan({
      TableName: "users"
    })
    .promise();

  const users = response.Items;

  return formatJSONResponse(200, {
    users
  });
};

export const main = middyfy(getUsers);
