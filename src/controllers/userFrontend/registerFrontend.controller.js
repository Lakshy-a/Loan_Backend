import { User } from "../../models/user.model.js";

export const registerFrontend = async (req, res) => {
  const { fullName, email, password, phoneNumber, address } = req.body;

  try {
    if (!fullName || !email || !password || !phoneNumber || !address)
      return res.status(400).json({ message: "Please fill in all fields" });

    const isEmailExist = await User.findOne({ email });
    if (isEmailExist)
      return res
        .status(400)
        .json({ message: "User with same email already exist" });

    const isPhoneExist = await User.findOne({ phoneNumber });
    if (isPhoneExist)
      return res
        .status(400)
        .json({ message: "User with same phone number already exist" });

    // Create and save user
    const user = new User({
      fullName,
      email,
      password,
      phoneNumber,
      address,
    });
    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ message: "Error creating user" });
  }
};
