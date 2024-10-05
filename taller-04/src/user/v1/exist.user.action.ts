import { UserModel, UserType } from "./user.model";

async function checkUserByIdAction(id: number): Promise<boolean> {
  const results = await UserModel.find({ id: id });

  return results.length > 0; 
}

export default checkUserByIdAction;


