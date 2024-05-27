const asyncHandler = require("express-async-handler");
const Van = require("../models/vanModel");

const getVans = asyncHandler(async (req, res) => {
  const vans = await Van.find();
  res.status(200).json(vans);
});

const getVanById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400);
    throw new Error("No ID provided");
  }
  const van = await Van.findOne({ id });
  if (!van) {
    res.status(404);
    throw new Error("No van found");
  }
  res.status(200).json(van);
});

const updateVanById = asyncHandler(async (req, res) => {
  const van = req.body;
  const { id } = van;
  if (!id) {
    res.status(400);
    throw new Error("No ID provided");
  }
  const updatedVan = await Van.findOneAndUpdate({ id }, van, {
    new: true,
    runValidators: true,
  });
  res.status(200).json(updatedVan);
});

const deleteVanById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400);
    throw new Error("No ID provided");
  }
  const van = await Van.findOneAndDelete({ id });
  if (!van) {
    res.status(404);
    throw new Error("No van found");
  }
  res.status(200).json(van);
});

const addVans = asyncHandler(async (req, res) => {
  const vans = req.body;
  if (!Array.isArray(vans) || vans.length === 0) {
    res.status(400);
    throw new Error("No vans provided");
  }
  const vanPromises = vans.map((van) => {
    const { id, name, price, description, imageUrl, type, hostId } = van;
    if (
      !id ||
      !name ||
      !price ||
      !description ||
      !imageUrl ||
      !type ||
      !hostId
    ) {
      res.status(400);
      throw new Error("All fields are required");
    }

    return Van.create({ id, name, price, description, imageUrl, type, hostId });
  });
  const createdVans = await Promise.all(vanPromises);
  res.status(201).json(createdVans);
});

module.exports = {
  getVans,
  getVanById,
  updateVanById,
  deleteVanById,
  addVans,
};
