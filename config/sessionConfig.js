const session = require('express-session');
const MongoStore = require('connect-mongo');
const config = require('./config');

module.exports = session({
    secret: config.SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: config.URI,
        collectionName: 'sessions',
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        httpOnly: true,
        secure: config.NODE_ENV === 'production', // Use secure cookies only in production
        sameSite: 'Strict',
    },
});
