const errorHandler = (err, req, res, next) => {
  if(err.message == "something went wrong")
    res.status(404);
  else res.status(500);
  res.json({error: err});
  next(err);
}

module.exports = errorHandler;
