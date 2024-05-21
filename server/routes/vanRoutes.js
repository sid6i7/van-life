const Express = require("express");
const asyncHandler = require("express-async-handler");
const Van = require("../models/vanModel");
const { getVans, getVanById, updateVanById, deleteVanById, addVans } = require("../controllers/vanController");

const router = Express.Router();

router.get("/", getVans);

router.get("/:id", getVanById);

router.put('/', updateVanById);

router.delete('/:id', deleteVanById);

router.post('/', addVans);

module.exports = router;
