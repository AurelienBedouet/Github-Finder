import { Dispatch } from "react";

export type UserType = {
  login: string;
  avatar_url: string;
  id: number | null;
  name: string;
  type: string;
  location: string;
  bio: string;
  blog: string;
  twitter_username: string;
  html_url: string;
  followers: number | null;
  following: number | null;
  public_repos: number | null;
  public_gists: number | null;
  hireable: boolean;
};

export type RepoType = {
  name: string;
  description: string;
  id: number;
  html_url: string;
  forks: boolean;
  open_issues: number;
  watchers_count: number;
  stargazers_count: number;
};

export type GithubActionTypes =
  | { type: "GET_USERS"; payload: UserType[] }
  | {
      type: "GET_USER_AND_REPOS";
      payload: { user: UserType; repos: RepoType[] };
    }
  | { type: "SET_LOADING" }
  | { type: "CLEAR_USERS" };

export type GithubState = {
  users: UserType[];
  loading: boolean;
  user: UserType;
  repos: RepoType[];
};

export type GithubContextType = {
  user: UserType;
  users: UserType[];
  repos: RepoType[];
  loading: boolean;
  dispatch: Dispatch<GithubActionTypes>;
};

export type AlertType = {
  type: string;
  msg: string;
};

export type AlertActionTypes =
  | { type: "SET_ALERT"; payload: AlertType }
  | { type: "REMOVE_ALERT" };

export type AlertContextType = {
  alert: AlertType | null;
  setAlert: (msg: string, type: string) => void;
};
