export const schema = {
  type: "object",
  properties: {
    name: {
      type: "string"
    },
    email: {
      type: "string"
    },
    address: {
      type: "string"
    },
    phone: {
      type: "number"
    },
    created_at: {
      type: "Date"
    }
  },
  required: ["name", "email", "address", "phone"]
};
