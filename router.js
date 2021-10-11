const router = require("express").Router();
const home = require("./controllers/home");
const loginCRUD = require("./controllers/login");
const game = require("./controllers/game");
const users = require("./controllers/users");

const restrict = require("./middlewares/restrict");

//menambah middleware khusus akses admin
const onlyAdmin = require("./middlewares/superAdmin");

const auth = require("./controllers/authController");
const room = require("./controllers/room");

router.get("/", home.index);
router.get("/login", loginCRUD.index);
router.post("/login", loginCRUD.auth);

router.get("/game", game.index);

router.get("/users", users.index);
router.get("/users/create", users.create);
router.post("/users", users.new);
router.get("/users/:id", users.detail);

router.get("/users/delete/:id", users.destruct);
router.get("/users/update/:id", users.formupdate);
router.post("/users/update/:id", users.makeupdate);

//Register Page
router.post("/api/v1/auth/register", auth.register);

// Login Page
router.post("/api/v1/auth/login", auth.login);

//only admin akses
router.get("/api/v1/auth/whoami", restrict, onlyAdmin, auth.whoami);

// only superAdmin akses to CRUD
// router.get("/", restrict, onlyAdmin, home.index);
// router.get("/login", restrict, onlyAdmin, loginCRUD.index);
// router.post("/login", restrict, onlyAdmin, loginCRUD.auth);

// router.get("/game", restrict, onlyAdmin, game.index);

// router.get("/users", restrict, onlyAdmin, users.index);
// router.get("/users/create", restrict, onlyAdmin, users.create);
// router.post("/users", restrict, onlyAdmin, users.new);
// router.get("/users/:id", restrict, onlyAdmin, users.detail);

router.post("/create-room", restrict, room.create);
router.post("/fight/room/:id", restrict, room.fight);
router.get("/room", room.index);
router.get("/room/delete/:id", room.destruct);

module.exports = router;
