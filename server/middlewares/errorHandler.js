module.exports = function (err, req, res, next) {
    const stringifiedErr = JSON.stringify(err);
    if (stringifiedErr.indexOf('ValidatorError') !== -1) {
        const mongooseErrors = err.errors;
        const errors = [];

        for (let key in mongooseErrors) {
            errors.push(mongooseErrors[key].message);
        }

        res.status(400).json({
            message: errors[0]
        });
    } else {
        let status = err.status || 500
        let message = err.message || 'Internal server error'

        res.status(status).json({
            message
        });
    }
}