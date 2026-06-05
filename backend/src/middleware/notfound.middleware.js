const notFound = (req, res, next) => {
  
  if (req.originalUrl === "/favicon.ico") {
    return res.status(204).end();
  }

  const error = new Error(`Route Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export default notFound;
