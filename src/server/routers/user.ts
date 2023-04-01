import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input, ctx }) => {
      return {
        greeting: `Hello ${input.text} ${ctx.auth.userId ?? ""}`,
      };
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.model.user.find({});
  }),
});
