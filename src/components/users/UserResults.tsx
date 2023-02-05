import { useContext } from "react";
import Loader from "../layout/Loader";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
import { GithubContextType } from "../../types";

const UserResults = () => {
  const { users, loading } = useContext(GithubContext) as GithubContextType;

  return loading ? (
    <div className="hero">
      <Loader />
    </div>
  ) : (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserResults;
