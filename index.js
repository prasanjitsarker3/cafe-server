const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
const restaurants = require('./data/Restaurant.json');

app.use(cors())
app.get('/', (req, res) => {
    res.send("Resturent Server Running")
})

app.get('/restaurants', (req, res) => {
    res.send(restaurants);
})
app.get('/restaurants/:id', (req, res) => {
    const id = req.params.id;
    const restaurantSelect = restaurants.find(n => n.id === id);
    res.send(restaurantSelect);
})

app.listen(port, () => {
    console.log(`Resturent Server Running ${port}`);
})