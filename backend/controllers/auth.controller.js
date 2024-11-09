import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import { z } from "zod";

// Define a Zod schema for signup
const signupSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

// Define a Zod schema for signin
const signinSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

export const signup = async (req, res, next) => {
  try {
    // Parse and validate request body with Zod
    const { username, email, password } = signupSchema.parse(req.body);

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    const { password: pass, ...userData } = newUser._doc;
    res.status(200).json({
      message: "User signed up successfully",
      data: userData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Send Zod validation error messages
      return res.status(400).json({
        message: "Validation failed",
        errors: error.errors.map(err => err.message),
      });
    }
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    // Parse and validate request body with Zod
    const { email, password } = signinSchema.parse(req.body);

    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, res, "Invalid credentials"));
    }

    const validPassword = await bcryptjs.compare(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, res, "Invalid credentials"));
    }

    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET
    );

    const { password: pass, ...userData } = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({
        message: "User signed in successfully",
        data: userData,
      });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Send Zod validation error messages
      return res.status(400).json({
        message: "Validation failed",
        errors: error.errors.map(err => err.message),
      });
    }
    next(error);
  }
};
