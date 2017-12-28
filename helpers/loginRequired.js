module.exports = function(req, res, next) {

    if (req.path.toLowerCase() == '/users/signin') return next();

    if (req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
    }
};