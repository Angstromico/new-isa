import express from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || 3000

app.use('/isa', express.static(path.join(process.cwd(), 'dist')))

app.get('/isa/*', function (req, res) {
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})