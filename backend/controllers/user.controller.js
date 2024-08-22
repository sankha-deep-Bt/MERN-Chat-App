import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    //find all users in the database $ne(not equal): loggedInUser
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password"); // we don't return the password

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar", error.message);
    res.status(500).json({ error: "Internal Server Error!!" });
  }
};
