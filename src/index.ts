import express, {json, urlencoded} from 'express';
import productsRoutes from './routes/products/index'

const app = express();
const port = 3000;

app.use(urlencoded({extended: false}))
app.use(json())

app.get('/', (req, res) => {
    res.send("Hello world 12");
});

app.use('/products', productsRoutes)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})