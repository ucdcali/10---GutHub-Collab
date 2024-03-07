import express from 'express';

const app = express();

app.set('view engine', 'ejs');

import routes from './routes/routes.js'; 
app.use('/', routes);

const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
