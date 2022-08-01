import { handlerPath } from "@libs/handler-resolver";

export const deleteUser = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "delete",
        path: "user/{id}",
        request: {}
      }
    }
  ]
};
