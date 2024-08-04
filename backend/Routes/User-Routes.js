import express from "express";

const UserRoutes = express.Router();

UserRoutes.post("/createUser", UserFromEmail, createUser);

export default UserRoutes;
