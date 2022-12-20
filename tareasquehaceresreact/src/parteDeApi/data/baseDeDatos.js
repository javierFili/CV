// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const task = require('./models/model.js');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
mongoose.Promise = global.Promise;
const connectionUrl = "mongodb+srv://javier123:tarija12345Javi@cluster0.xwqfx1e.mongodb.net/test";
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//import routes
const routes = require('./routes/routes.js');

//register the route
routes(app);

app.listen(port, () => {
  console.log(`RESTful API server running on ${port}`);
});