import express from 'express'
import path from 'path'

const application = express()

application.use(
	express.static(path.resolve(__dirname, 'dist'))
)


const PORT = 3500
application.listen(PORT, () => {
	console.log(`App running on port ${PORT}`)
})