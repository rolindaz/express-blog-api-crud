// import api token

const apiToken = process.env.apiToken;

function testMiddleware(req, res, next) {
    console.log(`${req.method} - ${req.url}`);
    if (req.apiToken !== apiToken) {
        console.log('Request has the wrong apiToken value');
        res.status(401).json({
            error: "Not Authorized",
            message: "You are not authorized to proceed"
        });
    } else next();   
};

module.exports = testMiddleware;