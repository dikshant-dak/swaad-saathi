import JWT from "jsonwebtoken";
import { Customer } from "../entity/customer.entity";

// Protected Routes token base
export const requireSignIn = async (req: any, res: any, next: any) => {
    try {
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        throw new Error("JWT_SECRET is not defined in the environment variables");
      }
      const token = req.body.token || req.query.token || req.headers.authorization;
      if (!token) {
        throw new Error("Authorization header is not set");
      }
  
      const bearer = token.split(" ");
      const bearerToken = bearer[1];
  
    //   const blackListedToken = await blacklist.findOne({ token: bearerToken });
    //   if(blackListedToken){
    //     return res.status(401).send({
    //       success: false,
    //       message: "This session has expired, please sign in",
    //     })
    //   }
  
      const decode = JWT.verify(token, secret);
      req.customer = decode;
      next();
    } catch (error) {
      console.log(error);
    }
  };