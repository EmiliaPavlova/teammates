interface ITeammate {
  name: string;
  birthday: Date;
  joined: Date;
}

type TeammateState = {
  teammates: ITeammate[]
}

type TeammateAction = {
  type: string
  teammate: ITeammate
}

type DispatchType = (args: TeammateAction) => TeammateAction