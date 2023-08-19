import { z } from 'zod'

export const baseSchema = z.object({
  body: z.object({}),
  params: z.object({}),
  query: z.object({})
})

export const idSchema = z.string().refine(value => !isNaN(+value), {
  message: 'The parameter "id" must be a number.'
})
