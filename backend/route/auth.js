const express = require("express");
const route = express();
const { login, register,coba } = require("../controllers/auth");

route.post("/register", register);
route.post("/login", login);
route.get("/coba", coba)

module.exports = route;
