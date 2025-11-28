import { UlasanModel } from "../models/ulasanModel.js";

export const UlasanController = {
  
  async getByItem(req, res) {
    try {
      const { itemId, itemType } = req.params;
      const ulasan = await UlasanModel.getByItem(itemId, itemType);
      res.json(ulasan);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  
  async getStats(req, res) {
    try {
      const { itemId, itemType } = req.params;
      const stats = await UlasanModel.getStats(itemId, itemType);
      res.json(stats);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  
  async create(req, res) {
    try {
      const { item_id, item_type, nama_reviewer, rating, komentar } = req.body;
      
      
      if (!item_id || !item_type || !nama_reviewer || !rating) {
        return res.status(400).json({ 
          error: "item_id, item_type, nama_reviewer, dan rating wajib diisi" 
        });
      }

      if (rating < 1 || rating > 5) {
        return res.status(400).json({ 
          error: "Rating harus antara 1-5" 
        });
      }

      const ulasan = await UlasanModel.create({
        item_id,
        item_type,
        nama_reviewer,
        rating: parseFloat(rating),
        komentar
      });

      res.status(201).json(ulasan);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  
  async getAll(req, res) {
    try {
      const ulasan = await UlasanModel.getAll();
      res.json(ulasan);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

 
  async remove(req, res) {
    try {
      const { id } = req.params;
      await UlasanModel.remove(id);
      res.json({ message: "Ulasan berhasil dihapus" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};