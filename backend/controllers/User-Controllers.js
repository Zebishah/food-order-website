import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import express from "express";
const app = express();
dotenv.config();
let success = null;

export const createUser = async (req, res, next) => {
let {userName,email,password,phone,Address} = req.body;
    
};
