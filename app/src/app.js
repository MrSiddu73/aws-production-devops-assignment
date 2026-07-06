const fs = require("fs");
const path = require("path");
const express = require("express");
const helmet = require("helmet");

const logDirectory = path.join(__dirname, "../logs");

if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory, { recursive: true });
}

const accessLogStream = fs.createWriteStream(
    path.join(logDirectory, "access.log"),
    { flags: "a" }
);

const morgan = require("morgan");
const cors = require("cors");
const compression = require("compression");

const routes = require("./routes");

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(morgan("dev"));

app.use(
    morgan("combined", {
        stream: accessLogStream,
    })
);
app.use("/", routes);

module.exports = app;