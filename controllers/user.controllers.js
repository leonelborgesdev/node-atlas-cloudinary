import User from "../models/user.model.js";

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, username } = req.body;
    const user = new User({
      name,
      email,
      username,
    });
    await user.save();
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
