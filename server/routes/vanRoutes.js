const Express = require("express");
const asyncHandler = require("express-async-handler");
const { getVans, getVanById, updateVanById, deleteVanById, addVans } = require("../controllers/vanController");
const {verifyUserToken} = require('../middleware/auth');

const router = Express.Router();

router.get("/", verifyUserToken, getVans);

router.get("/:id", verifyUserToken, getVanById);

router.put('/', verifyUserToken, updateVanById);

router.delete('/:id', verifyUserToken, deleteVanById);

router.post('/', verifyUserToken, addVans);

module.exports = router;
