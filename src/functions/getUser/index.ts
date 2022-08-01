import { handlerPath } from "@libs/handler-resolver";

export const getUser = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "user/{id}",
        request: {}
      }
    }
  ]
};
