import { supabase } from "../config/supabaseClient.js";

export const UlasanModel = {
  // Get ulasan by item (makanan atau merchandise)
  async getByItem(itemId, itemType) {
    const { data, error } = await supabase
      .from("ulasan")
      .select("*")
      .eq("item_id", itemId)
      .eq("item_type", itemType)
      .order("created_at", { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // Get statistik ulasan (rata-rata rating, jumlah ulasan)
  async getStats(itemId, itemType) {
    const { data, error } = await supabase
      .from("ulasan")
      .select("rating")
      .eq("item_id", itemId)
      .eq("item_type", itemType);
    
    if (error) throw error;
    
    if (data.length === 0) {
      return {
        averageRating: 0,
        totalReviews: 0,
        ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
      };
    }

    const totalReviews = data.length;
    const sumRating = data.reduce((sum, item) => sum + item.rating, 0);
    const averageRating = (sumRating / totalReviews).toFixed(1);
    
    const distribution = data.reduce((acc, item) => {
      const rounded = Math.floor(item.rating);
      acc[rounded] = (acc[rounded] || 0) + 1;
      return acc;
    }, {});

    return {
      averageRating: parseFloat(averageRating),
      totalReviews,
      ratingDistribution: {
        5: distribution[5] || 0,
        4: distribution[4] || 0,
        3: distribution[3] || 0,
        2: distribution[2] || 0,
        1: distribution[1] || 0
      }
    };
  },

  // Create ulasan baru
  async create(payload) {
    const { data, error } = await supabase
      .from("ulasan")
      .insert([payload])
      .select();
    
    if (error) throw error;
    return data[0];
  },

  // Get all ulasan (untuk admin, opsional)
  async getAll() {
    const { data, error } = await supabase
      .from("ulasan")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // Delete ulasan (untuk admin, opsional)
  async remove(id) {
    const { error } = await supabase
      .from("ulasan")
      .delete()
      .eq("id", id);
    
    if (error) throw error;
    return { success: true };
  }
};