import * as actionTypes from "./actionTypes"

const initialState: TeammateState = {
  teammates: [],
}

const reducer = (
  state: TeammateState = initialState,
  action: TeammateAction
): TeammateState => {
  switch (action.type) {
    case actionTypes.ADD_TEAMMATE:
      const newTeammate: ITeammate = {
        name: action.teammate.name,
        birthday: action.teammate.birthday,
        joined: action.teammate.joined,
      }
      return {
        ...state,
        teammates: state.teammates.concat(newTeammate),
      }
  }
  return state
}

export default reducer