import { z } from "zod";

export const CharacterListSchema = z.object({
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
    results: z.array(
      z.object({
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
          items: z.array(
            z.object({ resourceURI: z.string(), name: z.string() })
          ),
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
          items: z.array(
            z.object({ resourceURI: z.string(), name: z.string() })
          ),
        }),
        series: z.object({
          available: z.string(),
          returned: z.string(),
          collectionURI: z.string(),
          items: z.array(
            z.object({ resourceURI: z.string(), name: z.string() })
          ),
        }),
      })
    ),
  }),
  etag: z.string(),
});

export type CharacterListSchemaType = z.infer<typeof CharacterListSchema>;
