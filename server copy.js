const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();
const port = 3000;

app.use(helmet.contentSecurityPolicy({
  directives: {
    frameAncestors: ["'self'", "https://aloyal.stage.apps.stage01.making.ventures"]
  }
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});