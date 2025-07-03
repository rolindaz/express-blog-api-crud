function errorsHandler(err, req, res, next) {
    console.log('I am a middleware function');
    res.status(500);
    res.json({
        error: err.message
    });
};

module.exports = errorsHandler;