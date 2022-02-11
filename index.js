const express = require('express');
const user = require('./routes/users');
const routes = require('./routes/login');
const categoriesRouter = require('./routes/categories');
const blogPosts = require('./routes/blogPost');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use('/user', user);

app.use('/login', routes);

app.use('/categories', categoriesRouter);

app.use('/post', blogPosts);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
