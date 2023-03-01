import {francAll} from 'franc';
import { fileURLToPath } from 'url';
import express from 'express';
import langs from 'langs';
import path from 'path';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Base route
app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
