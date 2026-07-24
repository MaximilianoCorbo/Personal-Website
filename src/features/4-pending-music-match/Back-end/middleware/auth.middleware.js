const jwt = require("jsonwebtoken");
const { secret } = require("../controller/auth.controller");

exports.authMiddleWare = (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) {
    return res.status(401).json({ mensaje: "Acceso denegado" });
  }

  try {
    const payload = jwt.verify(token, secret);
    req.usuario = payload;
  } catch (e) {
    if (e.name === "JsonWebTokenError") {
      return res.status(401).json({ mensaje: "token invalido" });
    }
  }

  next();
};
