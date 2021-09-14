require("dotenv").config();
var cors = require("cors");
const express = require("express");
const connectToDb = require("./src/database/database");

const routes = require("./src/routers/routes");

connectToDb();

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

app.use(cors());
app.options("*", cors());

app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        },
    });
});

app.listen(port, () =>
    console.info(`Servidor rodando em http://localhost:${port}`)
);