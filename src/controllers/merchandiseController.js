import { MerchandiseModel } from "../models/merchandiseModel.js";

export const MerchandiseController = {
  async getAll(req, res) {
    try {
      const merchandise = await MerchandiseModel.getAll();
      res.json(merchandise);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const merchandise = await MerchandiseModel.getById(req.params.id);
      res.json(merchandise);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const merchandise = await MerchandiseModel.create(req.body);
      res.status(201).json(merchandise);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const merchandise = await MerchandiseModel.update(req.params.id, req.body);
      res.json(merchandise);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      await MerchandiseModel.remove(req.params.id);
      res.json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};