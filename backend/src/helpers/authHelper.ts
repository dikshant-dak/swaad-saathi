import bcrypt from "bcrypt";
import { check } from "express-validator";

export const hashPassword = async (password: string) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(`Error in hashing password: ${error} ☠️☠️`);
  }
};

export const comparePassword = async (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword);
}

// export const registerValidator = [
//     check('firstName','First Name is required').not().isEmpty(),
//     check('lastName','Last Name is required').not().isEmpty(),
//     check('email','Please include a valid email').isEmail().normalizeEmail({
//       gmail_remove_dots: true,
//     }),
//     check('password','Please enter a password with 6 or more characters, and should contain atleast one uppercase & one lowercase letter').isStrongPassword({
//       minLength: 6,
//       minLowercase: 1,
//       minUppercase: 1,
//       minNumbers: 0,
//       minSymbols: 0,
//     }),
// ]