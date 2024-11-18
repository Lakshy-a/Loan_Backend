import { User } from "../../models/user.model.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/generateToken.utils.js";
import bcryptjs from "bcryptjs";

export const loginFrontend = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Email and password are required" });

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isValidPassword = await bcryptjs.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const accessTokenPayload = {
      id: user._id,
      email: user.email,
      password: user.password,
    };
    const accessToken = generateAccessToken(accessTokenPayload);
    // console.log(accessToken);

    const refreshTokenPayload = {
      id: user._id,
    };
    const refreshToken = generateRefreshToken(refreshTokenPayload);

    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({
      message: "User logged in successfully",
      accessToken: accessToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error logging in user" });
  }
};
