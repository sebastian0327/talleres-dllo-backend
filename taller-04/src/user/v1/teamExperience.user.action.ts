import { UserModel, UserType } from "./user.model";

async function readExperienceByTeamAction(team: string): Promise<number> {
  const results = await UserModel.find({ team: team });

  const totalYears = results.reduce((acc, user) => acc + user.years, 0);

  return totalYears;
}

export default readExperienceByTeamAction;
