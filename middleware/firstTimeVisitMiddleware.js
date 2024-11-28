const firstTimeVisitMiddleware = (req, res, next) => {
    const DURATION = 1000 * 60 * 60 * 24 * 7; //ONE WEEK
    if (!req.session.visiting) {
        req.session.visiting = true;
        //console.log('First-time visitor');
    } else {
        //console.log('Returning visitor');
    }
    //refresh the user cookies
    req.session.cookie.maxAge = DURATION;
    next();
};

module.exports = firstTimeVisitMiddleware;
 