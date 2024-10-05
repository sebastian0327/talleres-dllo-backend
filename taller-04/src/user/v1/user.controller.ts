import readUserAction from "./read.user.action";
import readUsersByHobbyAction from "./readByHobby.user.action";
import checkUserByIdAction from "./exist.user.action";
import readExperienceByTeamAction from "./teamExperience.user.action";
import readUsersByFactionAction from "./readByFaction.user.action";
import createUserAction from "./create.user.action";
import { UserType } from "./user.model";

async function readUsers(): Promise<UserType[]> {
  const users = await readUserAction();

  return users;
}

async function readUsersByHobby(hobby: string): Promise<UserType[]> {
  const users = await readUsersByHobbyAction(hobby);

  return users;
}

async function checkUserById(id: number): Promise<boolean> {
  const users = await checkUserByIdAction(id);

  return users;
}

async function readExperienceByTeam(team: string): Promise<number> {
  const users = await readExperienceByTeamAction(team);

  return users;
}

async function readUsersByFaction(hobby: string): Promise<UserType[]> {
  const users = await readUsersByFactionAction(hobby);

  return users;
}

async function createUser(userData: UserType): Promise<UserType> {

  const users = await createUserAction(userData);

  return users;
}

export { readUsers, readUsersByHobby, checkUserById, readExperienceByTeam, readUsersByFaction, createUser};
