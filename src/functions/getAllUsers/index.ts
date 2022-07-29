import { handlerPath } from "@libs/handler-resolver";

export const getUsers = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "users",
        request: {}
      }
    }
  ]
};
