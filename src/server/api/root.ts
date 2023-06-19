import { marvelRouter } from "y/server/api/routers/marvel-router";
import { createTRPCRouter } from "y/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  marvelRouter: marvelRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
