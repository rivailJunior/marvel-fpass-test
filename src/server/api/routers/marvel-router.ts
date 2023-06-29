import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "y/server/api/trpc";
import { getRequest } from "y/service/api-instance";
import { returnNextAndPreviousCursor } from "y/service/service-utils";

const path = "/characters";

export const marvelRouter = createTRPCRouter({
  getCharacters: publicProcedure
    .input(
      z.object({
        name: z.string().nullish(),
        limit: z.number().min(1).max(20),
        cursor: z.number().nullish(),
      })
    )
    .query(async ({ input }) => {
      const { limit, cursor, name } = input;

      const { data } = await getRequest(path, {
        name,
        limit,
        offset: (cursor ?? 0) * limit,
      });

      const cursorAux = returnNextAndPreviousCursor(cursor ?? 1);
      const total = parseInt(data?.data?.total) || 0;
      const totalPages = total ? Math.ceil(total / limit) : 0;

      return {
        characters: data?.data.results,
        nextCursor: cursorAux.next,
        previousCursor: cursorAux.previous,
        totalPages: totalPages,
      };
    }),
  getCharacterById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { id } = input;
      const { data } = await getRequest(`${path}/${parseInt(id)}`, {});
      return {
        character: data?.data.results[0],
      };
    }),
  getCharacterByName: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      const { name } = input;
      if (name?.length >= 2) {
        const { data } = await getRequest(`${path}`, { nameStartsWith: name });
        return {
          characters: data?.data.results,
        };
      } else {
        return {
          characters: [],
        };
      }
    }),
});
