import express from 'express'
import jsonErrorHandler from 'express-json-error-handler';

import routes from './routes'

export default () => {
    
    const app = express()

    app.use(express.json()); 
    app.use(express.urlencoded({extended: true}))
    
    routes(app)

    app.use(jsonErrorHandler({
        // eslint-disable-next-line no-unused-vars
        log({err, req, res}) {
            console.log(err)
            return res.status(500).send('prolem adir adir adir')
        }
      })) 
  
    return app
} 

