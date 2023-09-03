import z from 'zod'
import { baseSchema, idSchema } from './commons'

export const productSchema = baseSchema.extend({
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
    name: z.string().max(150).min(1).optional(),
    description: z.string().max(500).optional(),
    price: z.number().nonnegative().optional(),
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

export type ProductType = z.infer<typeof productSchema>['body']
export type UpdateProductBodyType = z.infer<typeof updateProductSchema>['body']
export type UpdateProductParamsType = z.infer<typeof updateProductSchema>['params']
