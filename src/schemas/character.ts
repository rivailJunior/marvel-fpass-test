import { z } from "zod";

const CharacterSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  modified: z.string(),
  resourceURI: z.string(),
  urls: z.array(z.object({ type: z.string(), url: z.string() })),
  thumbnail: z.object({ path: z.string(), extension: z.string() }),
  comics: z.object({
    available: z.string(),
    returned: z.string(),
    collectionURI: z.string(),
    items: z.array(z.object({ resourceURI: z.string(), name: z.string() })),
  }),
  stories: z.object({
    available: z.string(),
    returned: z.string(),
    collectionURI: z.string(),
    items: z.array(
      z.object({
        resourceURI: z.string(),
        name: z.string(),
        type: z.string(),
      })
    ),
  }),
  events: z.object({
    available: z.string(),
    returned: z.string(),
    collectionURI: z.string(),
    items: z.array(z.object({ resourceURI: z.string(), name: z.string() })),
  }),
  series: z.object({
    available: z.string(),
    returned: z.string(),
    collectionURI: z.string(),
    items: z.array(z.object({ resourceURI: z.string(), name: z.string() })),
  }),
});

export const CharactersListSchema = z.array(CharacterSchema);

export const MarvelSchema = z.object({
  code: z.string(),
  status: z.string(),
  copyright: z.string(),
  attributionText: z.string(),
  attributionHTML: z.string(),
  data: z.object({
    offset: z.string(),
    limit: z.string(),
    total: z.string(),
    count: z.string(),
    results: CharactersListSchema,
  }),
  etag: z.string(),
});

export type CharacterSchemaType = z.infer<typeof CharacterSchema>;

export type CharactersListSchemaType = z.infer<typeof CharactersListSchema>;

export type MarvelSchemaType = z.infer<typeof MarvelSchema>;
