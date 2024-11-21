const Visit = require('../models/VisitModel'); 

//Để lưu số lượng người truy cập trong từng tháng 
const saveVisit = async (req, res) => {
  try {
    const now = new Date();
    const visit = new Visit({
      timestamp: now,
      month: now.getMonth() + 1, // Tháng (0-11) nên +1 để thành (1-12)
      year: now.getFullYear(),
    });

    await visit.save();
    res.status(201).json({ message: "Visit tracked" });
  } catch (error) {
    res.status(500).json({ error: "Failed to track visit" });
  }
};

// Lấy dữ liệu truy cập theo tháng
const getStats = async (req, res) => {
  try {
    const visits = await Visit.aggregate([
      {
        $group: {
          _id: { month: "$month", year: "$year" },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 },
      },
    ]);
    res.json(visits);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve stats" });
  }
};


module.exports = {
    saveVisit,
    getStats,
}