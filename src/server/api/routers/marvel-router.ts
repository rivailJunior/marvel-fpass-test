import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "y/server/api/trpc";
import { getRequest } from "y/service/api-instance";
import { returnNextAndPreviousCursor } from "y/service/service-utils";

export const marvelRouter = createTRPCRouter({
  getCharacters: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(20),
        cursor: z.number().nullish(),
      })
    )
    .query(async ({ input }) => {
      const { limit, cursor } = input;

      const { data } = await getRequest("/characters", {
        limit,
        offset: cursor,
      });

      const cursorAux = returnNextAndPreviousCursor(cursor ?? 1);
      return {
        characters: data?.data.results,
        nextCursor: cursorAux.next,
        previousCursor: cursorAux.previous,
      };
    }),
});
