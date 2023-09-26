import { z } from 'zod'

export const baseSchema = z.object({
  body: z.object({}),
  params: z.object({}),
  query: z.object({})
})

export const idSchema = z.string().uuid({
  message: 'Invalid Id'
})
