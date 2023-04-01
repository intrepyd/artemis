import { z } from "zod";

const server = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  DATABASE_URI: z.string().url(),
  DATABASE: z.string(),
});

const client = z.object({});

/**
 * @type {Record<keyof z.infer<typeof server> | keyof z.infer<typeof client>, string | undefined>}
 */
const processEnvironment = {
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URI: process.env.DATABASE_URI,
  DATABASE: process.env.DATABASE,
};

const merged = server.merge(client);

/** @typedef {z.input<typeof merged>} MergedInput */
/** @typedef {z.infer<typeof merged>} MergedOutput */
/** @typedef {z.SafeParseReturnType<MergedInput, MergedOutput>} MergedSafeParseReturn */

let environment = /** @type {MergedOutput} */ (process.env);

if (!process.env.SKIP_ENV_VALIDATION) {
  const isServer = typeof window === "undefined";

  const parsed = /** @type {MergedSafeParseReturn} */ (
    isServer
      ? merged.safeParse(processEnvironment)
      : client.safeParse(processEnvironment)
  );

  if (parsed.success === false) {
    console.error(
      "❌ Invalid environment variables:",
      parsed.error.flatten().fieldErrors
    );

    throw new Error("Invalid environment variables");
  }

  environment = new Proxy(parsed.data, {
    get(target, property) {
      if (typeof property !== "string") return;

      if (!isServer && !property.startsWith("NEXT_PUBLIC_"))
        throw new Error(
          process.env.NODE_ENV === "production"
            ? "❌ Attempted to access a server-side environment variable on the client"
            : `❌ Attempted to access server-side environment variable '${property}' on the client`
        );
      return target[/** @type {keyof typeof target} */ (property)];
    },
  });
}

export { environment };
