import express from 'express'

export const productRouter = express.Router()

productRouter.get('/', (_req, res) => {
  res.send('all products')
})

productRouter.post('/', (_req, res) => {
  res.send('post products')
})
