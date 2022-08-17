import { handlerPath } from "@libs/handler-resolver";

import { schema } from "./schema";

export const updateUser = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "patch",
        path: "user/{id}",
        request: {
          schemas: {
            "application/json": schema
          }
        }
      }
    }
  ]
};
