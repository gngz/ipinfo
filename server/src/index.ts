import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  c.header('server', 'ip-info server')
  return c.json({ message: 'Hello World!' })
})

export default app
