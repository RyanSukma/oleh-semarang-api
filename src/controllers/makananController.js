import { MakananModel } from "../models/makananModel.js";

export const MakananController = {
  async getAll(req, res) {
    try {
      const makanan = await MakananModel.getAll();
      res.json(makanan);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const makanan = await MakananModel.getById(req.params.id);
      res.json(makanan);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const makanan = await MakananModel.create(req.body);
      res.status(201).json(makanan);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const makanan = await MakananModel.update(req.params.id, req.body);
      res.json(makanan);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      await MakananModel.remove(req.params.id);
      res.json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};