module.exports = (req, _res, next) => {
  if (req.route.path === '/top-secret' && !(req.token.data.admin)) {
    next({ statusCode: 403, message: 'Restricted access'})
  }

  next();
}