const info = (req, res, next) => {
    console.log('middleware ran!!!');
    next();
};

module.exports = info