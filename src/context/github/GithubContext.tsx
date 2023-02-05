import React, { createContext, Dispatch, useReducer } from "react";

import { GithubActionTypes, GithubContextType, GithubState } from "../../types";
import githubReducer from "./GithubReducer";

const GithubContext = createContext<GithubContextType | null>(null);

export const GithubProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: GithubState = {
    users: [],
    loading: false,
    user: {
      login: "",
      avatar_url: "",
      id: null,
      name: "",
      type: "",
      location: "",
      bio: "",
      blog: "",
      twitter_username: "",
      html_url: "",
      followers: null,
      following: null,
      public_repos: null,
      public_gists: null,
      hireable: false,
    },
    repos: [],
  };

  const [state, dispatch]: [GithubState, Dispatch<GithubActionTypes>] =
    useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
