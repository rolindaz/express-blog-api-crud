function notFound(req, res, next) {
    console.log('This is a not found middleware');
    res.status(404);
    res.json({
        error: "Not Found",
        message: "Pagina non trovata"
    });
};

module.exports = notFound;