const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.json({
        message: error.message,
        status: statusCode,
    })
}

module.exports = errorHandler;