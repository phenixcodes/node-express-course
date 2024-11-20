const express = require('express');
const app = express();
const { products } = require("./data");

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.use(express.static("./public"))

app.get('/api/v1/test', (req,res) => {
    res.json({ message: "It worked!" })
})

app.get('/api/v1/products', (req,res) => {
    res.json(products)
})

app.get('/api/v1/products/:productID', (req,res) => {
    const idToFind = parseInt(req.params.productID); 
    const product = products.find((p) => p.id === idToFind);
    if (!(products[idToFind])){
        res.status(404).json({message: "That product was not found."})
    }
    else{
        res.json(req.params) 
    }
})

//the url would contain a query string, like: /api/v1/query?search=al&limit=2
//will return an array of results that satisfy the search conditions and the price is >= 20
app.get('/api/v1/query', (req,res) => {
    const search = req.query.search
    const limitBy = parseInt(req.query.limit)
    const sliced = products.slice(0,limitBy)
    let results = []

    const findName = (element) => {
        if (element.name.includes(search) && element.price >= 20){
            results.push(element.name)
        }
    }
    sliced.filter(findName)
    res.send(results)
})

app.all('*', (req, res) => {
    res.status(404).send('<h2>Not Found</h2>')
})

app.listen(3000, () => {
    console.log('server is listenning on port 3000')
})