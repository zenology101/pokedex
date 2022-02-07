const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');
const methodOverride = require('method-Override');

app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));
app.use(methodOverride("_method"));

// Index Route
app.get('/pokemon/', (req,res) => {
        res.render('index.ejs', {data: pokemon, title: "Pokemon - Index Page"});
});

// New Route
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs', {title: "Pokemon - New Page"});
});

// Delete Route
app.delete('/pokemon/:id', (req, res) => {
    pokemon.splice(req.params.id, 1)
        res.redirect("/pokemon")
});

// Update Route
app.put('/pokemon/:id', (req, res) => {
    pokemon[req.params.id] = req.params.id
    res.redirect("/pokemon")
});

//Create Route
app.post('/pokemon', (req, res) => {
    pokemon.push(req.params.id)
    res.redirect("/pokemon")
});

// Edit Route
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {data: pokemon[req.params.id], title: "Pokemon - Edit Page"});
});

// Show Route
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {data: pokemon[req.params.id], title: "Pokemon - Show Page"});
});

// Server Listener
app.listen(3000, () => {
    console.log('listening')
});