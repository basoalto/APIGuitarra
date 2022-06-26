import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import productsRouters from './routes/products.routes'

const app = express()

app.set('pkg', pkg);


app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req,res) => {
    res.json({
        name: app.get('pkg').name
    })
})

app.use('/products', productsRouters)

export default app;