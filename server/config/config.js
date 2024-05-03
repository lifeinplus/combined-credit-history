const dotenv = require("dotenv");

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:27017/cchdb`;

const SERVER_PORT = process.env.SERVER_PORT
    ? Number(process.env.SERVER_PORT)
    : 1337;

module.exports = {
    mongo: {
        uri: MONGO_URI,
    },
    server: {
        port: SERVER_PORT,
    },
};
