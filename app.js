/* ----------------------------------------- REQUIRE EXPRESS JS DEPENDENCY ---------------------------------------- */
const express = require('express');

/* -------------------------------------------- REQUIRE HTTPS DEPENDENCY -------------------------------------------- */
const https = require('https');

/* -------------------------------------- APP FOR RUN FUNCIONS FROM EXPRESS JS -------------------------------------- */
const app = express();

/* ------------------------------------------ WORK EXPRESS FOR STATIC FILE ------------------------------------------ */
app.use(express.static('public'));

/* --------------------------------------------- EXPRESS FOR HANDLE FROM -------------------------------------------- */
app.use(express.urlencoded({ extended: true }));

/* ------------------------------------------- MAKE RELATION DATA WITH EJS ------------------------------------------ */
app.set('view engine', 'ejs');

/* -------------------------------------------- VARIABLE AT GLOBAL SCOPE -------------------------------------------- */
// 1. to store url
const url = 'https://api.dazelpro.com/mobile-legends/hero';

/* ------------------------------------------ END VARIABLE AT SCOPE GLOBAL ------------------------------------------ */

/* ----------------------------------------- ROOT ROUTE TO DISPLAY HOME PAGE ---------------------------------------- */
app.get('/', (req, res) => {
    https.get(url, (response) => {
        // perform making data to ejs layout
        response.on('data', (data) => {
            datasets = JSON.parse(data);

            res.render('home.ejs', {
                datasets: datasets.hero,
                url: url,
            });
        });
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('server is running at port 3000');
});
