const express = require('express');
const app = express();
const { products, people } = require("./data.js");
const peopleRouter = require("./routes/people.js")

//create logger middleware
const logger = (req,res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}
//Loads html and css files to homepage
app.use(express.static('./methods-public'))

//create middleware for parsing json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//creating a route to people.js
app.use("/api/v1/people", peopleRouter);

app.get('/', (req, res) =>  {
    res.send('Home Page')
})

app.get('/api/v1/test', (req,res) => {
    res.json({ message: "It worked!" })
})

// app.post('/api/v1/people', (req,res) => {
//     const { name } = req.body
//     if (name) {
//         people.push({ id: people.length + 1, name: req.body.name });
//         res.status(201).json({ success: true, name: req.body.name });
//         return console.log(name)
//     }
//     else{
//         res.status(400).json({ success: false, message: "Please provide a name" })
//         return console.log(`No name was entered`)
//     }
// })

// app.get('/api/v1/people', (req, res) => {
//     res.json(people)
// })

app.get('/api/v1/products', (req,res) => {
    res.json(products)
})

//user enters a product id that is in the product object, it will return the data back
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

// the url would contain a query string, like: /api/v1/query?search=al&limit=2
// will return an array of results that satisfy the search conditions and the price is >= 20
app.get('/api/v1/query', (req,res) => {
    const search = req.query.search
    const limitBy = parseInt(req.query.limit)
    const sliced = products.slice(0,limitBy)
    let results = []
    
    const findName = (element) => {
        if (element.name.includes(search)){
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