// import { MongoClient } from "mongodb";
// import Papr, { schema, types } from "papr";

// const papr = new Papr();

// const connection = await MongoClient.connect("mongodb://localhost:27017");

// papr.initialize(connection.db("test"));

// const User = papr.model(
//   "users",
//   schema({
//     age: types.number(),
//     firstName: types.string({ required: true }),
//     lastName: types.string({ required: true }),
//   })
// );

// await papr.updateSchemas();

// const johnWick = await User.find({ firstName: "John", lastName: "Wick" });

export {};
