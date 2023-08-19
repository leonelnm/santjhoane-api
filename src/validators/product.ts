import z from 'zod'
import { baseSchema, idSchema } from './commons'

export const produtSchema = baseSchema.extend({
  body: z.object({
    name: z.string().max(150).min(1),
    description: z.string().max(500).optional(),
    price: z.number().nonnegative(),
    enabled: z.boolean().optional(),
    isEspecial: z.boolean().optional()
  })
})

export const updateProductSchema = baseSchema.extend({
  body: z.object({
    name: z.string().max(150).min(1),
    description: z.string().max(500).optional(),
    price: z.number().nonnegative(),
    enabled: z.boolean().optional(),
    isEspecial: z.boolean().optional()
  }),
  params: z.object({
    id: idSchema
  })
})

export const getProductSchema = baseSchema.extend({
  params: z.object({
    id: idSchema.optional()
  })
})
