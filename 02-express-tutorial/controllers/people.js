const { people } = require("../data.js");

const addPerson = (req,res) => {
    const { name } = req.body
    if (name) {
        people.push({ id: people.length + 1, name: req.body.name });
        res.status(201).json({ success: true, name: req.body.name });
        return console.log(name)
    }
    else{
        res.status(400).json({ success: false, message: "Please provide a name" })
        return console.log(`No name was entered`)
    }
}

const getPeople = (req,res) => {
    res.json(people)
}

const getPerson = (req,res) => {
    const data = req.params.id
    const id = parseInt(data)
    // .find returns the first instance of the array that statisfies the condition
    const found = people.find((element) => {
        return element.id === id
    })
    if (found){
        res.status(200).json(found)
    }else {
        res.status(404).send("Does not exist. Sorry.")
    }
}

const updates = (req,res) => {
    const { id } = req.params
    const { name } = req.body
  
    const person = people.find((element) => {
        return element.id == id
    })

    if (person){
        const newPeople = people.map((element) => {
            people[id-1].name = name
            return people
        })
        res.status(200).json(newPeople)
    }else {
        res.status(404).send("Does not exist. Sorry")
    }
}

const remove = (req,res) => {
    const id = Number(req.params.id)
    const person = people.find((element) => {
        return element.id == id
    })
    if (person){
        const newPeople = people.filter((element) => {
            return element.id != id
        })
        res.status(200).json(newPeople)
    }else {
        res.status(404).send("Does not exist. Sorry")
    }
}

module.exports = { addPerson, getPeople, getPerson, updates, remove }