import express from 'express';
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const wishlists = [];

app.get('/', (req, res) => {
res.render('home');

});

app.get('/summary', (req, res) => {
res.render('summary', {wishlists});

});

app.post('/makeWishlist', (req, res) => {

const{
title,
rating,
comments
} = req.body;

if(!title || title === null || !rating || rating === null || !comments || comments === null){

    return res.send("All fields are required!");
}

wishlists.push({title, rating, comments});
res.redirect('/summary');

});


const PORT = 3000;

app.listen(PORT, () => {
console.log(`Server is running at: http://localhost:${PORT}`);

});