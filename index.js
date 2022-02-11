const express = require('express');
const user = require('./routes/usersRouter');
const routes = require('./routes/loginRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const blogPosts = require('./routes/blogPostRouter');

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
