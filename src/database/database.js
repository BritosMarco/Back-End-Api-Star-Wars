const mongoose = require("mongoose");

const connectToDb = () => {
    mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", () => console.error());
    db.once("open", () => console.log("conectado ao banco de dados!"));
};

module.exports = connectToDb;