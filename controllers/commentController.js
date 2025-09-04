import Comment from "../models/Comment.js";

// @desc Add a comment to a beggar spot
// @route POST /api/beggars/:id/comments
// @access Private
export const addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const beggarId = req.params.id;

    const newComment = await Comment.create({
      beggar: beggarId,
      user: req.user.id,
      text,
    });

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get all comments for a beggar spot
// @route GET /api/beggars/:id/comments
// @access Public
export const getComments = async (req, res) => {
  try {
    const beggarId = req.params.id;
    const comments = await Comment.find({ beggar: beggarId })
      .populate("user", "username email")
      .sort({ createdAt: -1 });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
