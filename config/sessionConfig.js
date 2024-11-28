const session = require('express-session');
const MongoStore = require('connect-mongo');
const config = require('./config');

const sessionConfig = () => {
    return session({
        secret: config.SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: config.URI,
            collectionName: 'sessions',
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
            secure: config.NODE_ENV === 'production',
        },
    });
};

module.exports = sessionConfig;
