function errorsHandler(err, req, res, next) {
    console.log('Something is wrong on the server side');
    res.status(500);
    res.json({
        error: err.message
    });
};

module.exports = errorsHandler;