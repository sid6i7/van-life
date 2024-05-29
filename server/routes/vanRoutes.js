const Express = require("express");
const asyncHandler = require("express-async-handler");
const { getVans, getVanById, updateVanById, deleteVanById, addVans } = require("../controllers/vanController");
const {verifyUserToken} = require('../middleware/auth');

const router = Express.Router();

router.get("/", getVans);

router.get("/:id", getVanById);

router.put('/', verifyUserToken, updateVanById);

router.delete('/:id', verifyUserToken, deleteVanById);

router.post('/', verifyUserToken, addVans);

module.exports = router;
