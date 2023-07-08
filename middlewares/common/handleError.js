// 404 handler
function notFoundHandler(req, res, next) {
  res.status(404).json({
    message: "Your requested URL not founded",
  });
  next();
}

// Error Handler
function errorHandler(err, req, res, next) {
  console.log(err);
}

module.exports = { notFoundHandler };
