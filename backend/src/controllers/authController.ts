import dotenv from "dotenv";
import JWT from "jsonwebtoken";
import { hashPassword, comparePassword } from "../helpers/authHelper";
import { validationResult } from "express-validator";
import { myDataSource } from "../../app-data-source";
import { Customer } from "../entity/customer.entity";

dotenv.config();

export const registerController = async (req: any , res: any) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        message: "Errors",
        errors: errors.array() 
      });
    }

    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      age
    } = req.body;

    // check user
    const existingUser = await myDataSource.getRepository(Customer).findOne({ where: { email } });

    // existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Registerd please login",
      });
    }

    const hashedPassword = await hashPassword(password);
    const customer = await myDataSource.getRepository(Customer).create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
      age
    }).save();

    res.status(201).send({
      success: true,
      message: "Customer Registered Successfully",
      customer,
    });
  } catch (error) {
    console.log(`Error in registering user: ${error} ☠️☠️`);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

export const loginController = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    // check user
    const customer = await myDataSource.getRepository(Customer).findOne({ where: { email } });
    if (!customer) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }

    const match = await comparePassword(password, customer.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid password",
      });
    }

    //TOKEN
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET is not defined in the environment variables");
    }
    const token = await JWT.sign({ _id: customer._id }, secret, {
      expiresIn: "2 hours",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      customer: {
        id: customer.id,
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        phone: customer.phone,
        age: customer.age,
      },
      token,
    });
  } catch (error) {
    console.log(`Error in login user: ${error} ☠️☠️`);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
}