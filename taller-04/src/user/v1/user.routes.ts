import { Router, Request, Response } from "express";
import { readUsers, readUsersByHobby , checkUserById, readExperienceByTeam, readUsersByFaction, createUser} from "./user.controller";

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function GetUsers(request: Request, response: Response) {
  const users = await readUsers();

  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

async function GetUsersByHobby(request: Request, response: Response) {
  const hobby = request.query.hobby;

  if (typeof hobby === 'string') {
    const users = await readUsersByHobby(hobby);

    response.status(200).json({
      message: "Success.",
      users: users,
    });
  } else {
    response.status(400).json({
      message: "Invalid request. 'hobby' must be a string.",
    });
  }
}

async function CheckUserExists(request: Request, response: Response) {
  const id = Number(request.query.id); 

  if (isNaN(id) || !Number.isInteger(id)) {
    return response.status(400).json({
      message: "Invalid request. 'id' must be an integer.",
    });
  }

  const userExists = await checkUserById(id); 
  if (userExists) {
    response.status(200).json({
      message: "User exists.",
    });
  } else {
    response.status(404).json({
      message: "User not found.",
    });
  }
}

async function GetExperienceByTeam(request: Request, response: Response) {
  const team = request.query.team;

  if (typeof team === 'string') {
    const totalYears = await readExperienceByTeam(team); 
    const message = totalYears; 

    response.status(200).json({
      message: "Success.",
      experience: message, 
    });
  } else {
    response.status(400).json({
      message: "Invalid request. 'team' must be a string.",
    });
  }
}

async function GetUsersByFaction(request: Request, response: Response) {
  const faction = request.query.faction;

  if (typeof faction === 'string') {
    const users = await readUsersByFaction(faction);

    response.status(200).json({
      message: "Success.",
      users: users,
    });
  } else {
    response.status(400).json({
      message: "Invalid request. 'faction' must be a string.",
    });
  }
}

async function PostUser(request: Request, response: Response) {
  const userData = request.body;

  if (!userData || typeof userData !== 'object') {
    return response.status(400).json({
      message: "Invalid request. Body must be a JSON object."
    });
  }

  const newUser = await createUser(userData);

  if (newUser) {
    response.status(201).json({
      message: "User created successfully.",
      user: newUser, 
    });
  } else {
    response.status(500).json({
      message: "Error creating user. Please try again."
    });
  }
}

userRoutes.get("/", GetUsers);
userRoutes.get("/hobby", GetUsersByHobby); 
userRoutes.get("/exist", CheckUserExists);
userRoutes.get("/team-experience", GetExperienceByTeam);
userRoutes.get("/by-faction", GetUsersByFaction);
userRoutes.post("/", PostUser);

// EXPORT ROUTES
export default userRoutes;

