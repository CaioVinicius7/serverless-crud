import { handlerPath } from "@libs/handler-resolver";

import { schema } from "./schema";

export const createUser = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "user",
        request: {
          schemas: {
            "application/json": schema
          }
        }
      }
    }
  ]
};
