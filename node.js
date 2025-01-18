const express = require('express');
const app = express();
const path = require('path');

// Servire il file statico (index.html) dalla directory pubblica
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint API per ottenere i dettagli del preventivo
app.get('/api/quote', (req, res) => {
    // Esempio di dati dinamici, puoi modificare questa parte in base alla logica che ricevi le informazioni
    const quoteDetails = {
        number: "123456",
        subject: "Traduzione manuale utente",
        service: "Translation",
        languages: "Italiano, Inglese, Tedesco",
        amount: "€1000"
    };
    
    res.json(quoteDetails);  // Risposta con i dati in formato JSON
});

// Avvia il server sulla porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server in esecuzione sulla porta ${PORT}`);
});
