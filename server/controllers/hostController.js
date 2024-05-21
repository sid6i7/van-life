const asyncHandler = require('express-async-handler');
const Van = require('../models/vanModel');

const getVansByHostId = asyncHandler(async (req, res) => {
    const hostId = req.params.hostId;
    if(!hostId) {
        res.status(400);
        throw new Error('No hostId provided');
    }
    const vans = await Van.find({hostId});
    if(!vans || vans.length === 0) {
        res.status(404);
        throw new Error('No vans found for host', hostId);
    }
    res.status(200).json(vans);
})

module.exports = {
    getVansByHostId
}