import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const JWT_KEY = process.env.JWT_SECRET;

if (!JWT_KEY) {
  throw new Error("JWT_SECRET environment variable is not defined");
}

interface DecodedToken {
  userId: number;
  [key: string]: any;
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Authorization token not provided" });
    }

    jwt.verify(token, JWT_KEY, (err, decodedToken) => {
      if (err) {
        console.error("JWT verification error:", err.message);
        return res.status(403).json({ error: "Invalid or expired token" });
      }

      // Check if decodedToken is an object with id property
      if (typeof decodedToken !== 'object' || decodedToken === null) {
        console.error("Invalid token payload: expected object, got", typeof decodedToken);
        return res.status(403).json({ error: "Invalid token payload format" });
      }

      const user = decodedToken as DecodedToken;
      
      if (!user.userId) {
        console.error("Token missing required userId field:", decodedToken);
        return res.status(403).json({ error: "Token missing required user information" });
      }

      console.log("Authenticated user:", user);
      req.user = user;
      next();
    });
  } catch (error) {
    console.error("Unexpected error in auth middleware:", error);
    return res.status(500).json({ error: "Internal server error during authentication" });
  }
};
