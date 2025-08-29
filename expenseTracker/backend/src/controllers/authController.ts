import {Request, Response} from "express";

import { PrismaClient } from '../../dist/generated/prisma/client.js'


import { loginSchema,signupSchema } from "../validation/userValidation";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';


const client = new PrismaClient();
const JWT_KEY = process.env.JWT_SECRET;
if(!JWT_KEY){
    throw new Error("JWT Key is not defined");
}


  export const signup = async(req:Request,res:Response) =>{  
    try{
        // 1-email aur password name for signup
        const{email , password, name}  = signupSchema.parse(req.body);
          // 2- checking email is not registerd
          const existingUser = await client.user.findUnique({where: {email}});
           
          if(existingUser){
            res.status(404).json({
                message: "User is already register !"
            })
          }

        //   3- hashed the password

      const hashedPassword = await bcrypt.hash(password,10);

    // 4- signup successfully

    const user = await client.user.create({
        data: {email, password:hashedPassword,name}
    })

    res.status(201).json({
        message: " User created successfully",
        user: {id: user.id, email: user.email, name: name},
    })

    

    }catch(err){
        res.status(403).json({
            message: "Error while creating user"
        })
    }

    
}

export const login = async( req:Request, res:Response) =>{
  try{
        
        const {email,password} = loginSchema.parse(req.body);
        
        // finding registered email
        const user = await client.user.findUnique({
          where: {email}
        })
        
        // checking user exist or not

        if(!user){
          return res.status(404).json({
            error: "user is not found"
           })
        }
        
        // if user find the match the password of user

        const passwordMatch = await bcrypt.compare(password, user.password);
        
        // passwordmatch checking
        if(!passwordMatch){
          return res.status(403).json({
            error: "User credentials is wrong"
          })
        }


      //  checking tokens

      const token = jwt.sign({userId: user.id},JWT_KEY, {expiresIn: '1d'});
      res.json({
        message: "User succesfully login",
        token,
      })


  }catch(err){
    res.status(403).json({
      message: "Please enter a right credentials"
    })
  }
}


