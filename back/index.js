const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://skander:admin@cluster0.3qjei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const Animal = mongoose.model('Animal', { description: String });
const User = mongoose.model('User', { nom: String, prenom: String, email: String, mdp: String })
app.use(cors())
app.use(bodyParser.json())

// CRUD Animal

app.get('/animal', function (req, res) {
    Animal.find().then((data) => {
        res.json(data)
    }, (err) => {
        res.json({
            message: "error retrieving animals"
        })
    })
})
app.get('/findfirst', function(req, res) {
    let {id_animal} = req.body
        Animal.findOne({id_animal}).then((data) => {
            res.json(data)
        }, (err) => {
            res.json({
                message: "error retrieving animals"
            })
        })
    });  


app.post('/animal', function(req, res) {
    let animal = new Animal(req.body)
    animal.save().then(() => {
        res.json({
            message: "animal ajouté avec succées" 
        })
    }, () => {
        res.json({
            message: "erreur lors de l'ajout d'un animal"
        })
    })
})
app.post('/animal/edit', function(req, res) {
    let {id_animal, description } = req.body   
    Animal.findOneAndUpdate({id_animal}, {description}).then(() => {
        res.json({
            message: "animal mise a jour avec succées"
        })
    }, () => {
        res.json({
            message: "erreur !"
        })
    })
})

app.post('/animal/delete', function(req, res) {
    let { id_animal } = req.body
    Animal.findOneAndDelete({id_animal}).then(() => {
        res.json({
            message: "animal supprimer avec succées"
        })
    }, () => {
        res.json({
            message: "erreur lors de la supression"
        })
    })
})


app.get('/user', function(req, res) {
    User.find().then((data) => {
        res.json(data)
    }, (err) => {
        res.json({
            message: "error retrieving users"
        })
    })
})

app.post('/user', function(req, res) { 
    let user = new User(req.body)
    user.save().then(() => {
        res.json({
            message: "utilisateur ajouté avec succées" 
        })
    }, () => {
        res.json({
            message: "erreur lors de l'ajout d'un utilisateur"
        })
    })
})

app.listen(3000)