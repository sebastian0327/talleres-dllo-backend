import { UserModel, UserType } from "./user.model";

async function readUsersByHobbyAction(hobby: string): Promise<UserType[]> {

  const results = await UserModel.find({hobbies: [hobby]});

  return results;
}


export default  readUsersByHobbyAction;

