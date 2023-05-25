import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRotes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true, // todas as URLs de front-end pode acessar
})

app.register(jwt, {
  secret: 'spacetime', // todas as URLs de front-end pode acessar
})

app.register(authRotes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
