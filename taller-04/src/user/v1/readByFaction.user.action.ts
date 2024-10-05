import { UserModel, UserType } from "./user.model";

async function readUsersByFactionAction(faction: string): Promise<UserType[]> {

  const results = await UserModel.find({faction: faction});

  return results;
}


export default  readUsersByFactionAction;

