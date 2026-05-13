import { defineCollection, z } from 'astro:content';

const services = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		price: z.string(),
		duration: z.string(),
		order: z.number(),
	}),
});

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		author: z.string(),
		readTime: z.string(),
		lang: z.enum(['fr', 'en', 'es', 'de', 'it']).default('fr'),
		tags: z.array(z.string()).default([]),
	}),
});

const cases = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		status: z.string(),
	}),
});

export const collections = { services, blog, cases };
