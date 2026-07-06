const os = require("os");

exports.home = (req, res) => {
    res.json({
        application: "AWS Production DevOps Assignment",
        status: "Running - CI/CD Successful"
    });
};

exports.health = (req, res) => {
    res.status(200).json({
        status: "Healthy"
    });
};

exports.status = (req, res) => {
    res.json({
        uptime: process.uptime(),
        node: process.version,
        platform: process.platform,
        environment: process.env.NODE_ENV || "development"
    });
};

exports.system = (req, res) => {
    res.json({
        hostname: os.hostname(),
        cpu: os.cpus().length,
        architecture: os.arch(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem()
    });
};

exports.time = (req, res) => {
    res.json({
        serverTime: new Date()
    });
};

const packageJson = require("../../package.json");

exports.version = (req, res) => {
    res.json({
        application: packageJson.name,
        version: packageJson.version,
        environment: process.env.NODE_ENV || "development"
    });
};