import { createContext, Dispatch, useReducer } from "react";
import { AlertActionTypes, AlertType } from "../../types";
import alertReducer from "./AlertReducer";

const AlertContext = createContext<{
  alert: AlertType | null;
  setAlert: (msg: string, type: string) => void;
} | null>(null);

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: AlertType | null = null;

  const [state, dispatch]: [AlertType | null, Dispatch<AlertActionTypes>] =
    useReducer(alertReducer, initialState);

  // Set an alert
  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
