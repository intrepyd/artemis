import { schema, types } from "papr";

import { papr } from "~/utils/database";

const userSchema = schema({
  age: types.number(),
  firstName: types.string({ required: true }),
  lastName: types.string({ required: true }),
});

export type UserDocument = (typeof userSchema)[0];

export const User = papr.model("users", userSchema);
