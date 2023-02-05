import { AlertActionTypes, AlertType } from "../../types";

const alertReducer = (
  state: AlertType | null,
  action: AlertActionTypes
): AlertType | null => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload;
    case "REMOVE_ALERT":
      return null;
    default:
      return state;
  }
};

export default alertReducer;
