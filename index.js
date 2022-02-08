const express = require('express');
const userController = require('./controller/users');
const routes = require('./routes/login');
// const { auth } = require('./middlewares/auth');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use('/user', userController);

app.use('/login', routes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
