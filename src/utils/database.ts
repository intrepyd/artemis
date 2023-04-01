import { MongoClient } from "mongodb";
import Papr from "papr";

import { environment } from "~/environment.mjs";

export let client: MongoClient;

export const papr = new Papr();

export async function connect() {
  client = await MongoClient.connect(environment.DATABASE_URI);

  papr.initialize(client.db(environment.DATABASE));

  await papr.updateSchemas();
}

export async function disconnect() {
  await client.close();
}
