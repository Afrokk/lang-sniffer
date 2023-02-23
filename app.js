import {franc, francAll} from 'franc';
import express from 'express';
import langs from 'langs';


const app = express();

// Base route
app.get('/', (req, res) => {
  res.send('Welcome to the language sniffer! Work in progress.');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
