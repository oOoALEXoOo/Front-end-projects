module.exports = {
  appPort: 3000,
  accessControlAllowOrigin: (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, content-type, accept');
    next();
  }
};