import User from "../models/user.model";

export const getUserById = async (req, res) => {
  try {
    const { id } = req.parmas;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
