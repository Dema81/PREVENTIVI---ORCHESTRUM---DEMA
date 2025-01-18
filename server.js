const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;  // Porta del server

app.use(express.json());  // Per il parsing dei dati in formato JSON

// Endpoint per ottenere i dettagli del preventivo
app.get('/api/quote', (req, res) => {
    const filePath = path.join(__dirname, 'quote-details.json');
    
    // Leggi il file JSON e invia il contenuto
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Errore nel recupero dei dettagli');
        }
        res.json(JSON.parse(data));  // Restituisci il contenuto come JSON
    });
});

// Endpoint per aggiornare i dettagli del preventivo
app.post('/api/update-quote', (req, res) => {
    const updatedQuote = req.body;

    const filePath = path.join(__dirname, 'quote-details.json');
    
    // Scrivi i nuovi dettagli nel file JSON
    fs.writeFile(filePath, JSON.stringify(updatedQuote, null, 2), (err) => {
        if (err) {
            return res.status(500).send('Errore nell\'aggiornamento del preventivo');
        }
        res.status(200).send('Dettagli aggiornati con successo');
    });
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
