import { defineCollection, z } from 'astro:content';

const guideCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    icon: z.string(),
    version: z.string(),
    date: z.date(),
    video: z.string(),
    pdf: z.string()
  })
});

export const collections = {
  'guides': guideCollection
};