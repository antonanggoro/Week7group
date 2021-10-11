module.exports = (req, res, next) => {
  if (req.user && req.user.role == "playerUser") {
    next();
  }
  res.json("User is not Player User");
};
