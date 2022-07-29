import { DynamoDB } from "aws-sdk";

const options = {
  region: "localhost",
  endpoint: "http://localhost:8000",
  accessKeyId: "X",
  secretAccessKey: "X"
};

export const document = process.env.IS_OFFLINE
  ? new DynamoDB.DocumentClient(options)
  : new DynamoDB.DocumentClient();
