import { UserModel, UserType } from "./user.model";

async function createUserAction(userData: UserType): Promise<UserType> {

  const results = await UserModel.create(userData);

  return results;
}


export default  createUserAction;

