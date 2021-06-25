
//libraries imported: express + body-parser
// stellt funktionen zur verfügung um middelware einzufugen pfade etc...
const express = require('express');
//mein controller wo die ruten definiert sind
const memeRoutes = require('./api/routes/MemeRoutes');

// cors = Cross-Origin Resource Sharing
//middleware-> gibt mir die möglichkeit, dass ich die cors sharing konfigurieren hat, wenn webseite unterschiedliche klients bedient
//der header wird mir im res so gesetzt, dass von allen Quellen geladen werden (allow origin *)
// mir cors erlaubt man alles
const cors = require('cors')

//Express aplikation wird erstellt
const app = express();

//specify a port and pass it via an environment variable, or predefine it
const port = process.env.PORT || 3000;

//routes get added-> we create our API route
//middleware wird installiert
app.use(cors());
//2 middelwaren,
//middleware-> JSON wird in ein JS Objekt umgewandelt
//beide machen eine Umwandlung.

app.use(express.urlencoded({extended: true}));

app.use(express.json());
//Meme routes werden installiert, alle Routen
app.use('/api/v1/meme', memeRoutes);


// Routen werden automatisch dazugef.



// Start Server listening on Port ${port}
// if we have an error we send an error message to our terminal
app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Server listening at http://localhost:${port}`);
    }
});