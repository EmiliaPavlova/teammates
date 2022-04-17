import * as actionTypes from "./actionTypes"

export function addTeammate(teammate: ITeammate) {
  const action: TeammateAction = {
    type: actionTypes.ADD_TEAMMATE,
    teammate,
  }

  return (dispatch: DispatchType) => dispatch(action)
}
