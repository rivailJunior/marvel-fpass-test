import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "y/server/api/trpc";
import { getRequest } from "y/service/api-instance";

export const marvelRouter = createTRPCRouter({
  getCharacters: publicProcedure.query(async () => {
    const { data } = await getRequest("/characters", {});

    return {
      characters: data?.data.results,
    };
  }),
});
