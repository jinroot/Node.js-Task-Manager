
require('dotenv').config();

const config = {
    PORT: process.env.SERVER_PORT || 3000,
    URI: process.env.MONGO_URI,
    SECRET: process.env.SECRET_KEY,
    NODE_ENV: process.env.NODE_ENV,
};

module.exports = config;
