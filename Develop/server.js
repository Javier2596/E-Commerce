const express = require('express');
const routes = require('./routes');
// import sequelize connection
//connected to config file
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// changed the console.log message 
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App is listening!`));
});
