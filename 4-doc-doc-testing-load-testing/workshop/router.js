const express = require('express');
const bodyParser = require('body-parser');
const { getTodo, postTodo, patchTodo } = require('./toDoController');
const app = express();

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/todo', getTodo);
app.post('/todo', postTodo);
app.patch('/todo/:id', patchTodo);

module.exports = app;
