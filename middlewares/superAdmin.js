module.exports = (req, res, next) => {
  if (req.user && req.user.username == "superAdmin") {
    next();
  }
  res.json("User is not Super Admin");
};

// middleware bisa di ganti menjadi role player  menggantikan username
//   if (req.user && req.user.role == "superAdmin")
