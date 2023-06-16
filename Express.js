const Express = require('express');
const fs = require('fs');
const auth = require('./middleware/authUser');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = Express();
const port = process.env.PORT || 3000;

app.use(Express.json());
app.use(morgan('dev'));
app.use(cors());

fs.readdirSync("./routes").map(async (r) => { 
    const route = require(`./routes/${r}`)
    app[route.method.toLowerCase()]("/api"+route.path, route.auth ? auth.authUser : (req, res, next) => { next() }, route.fn)
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})