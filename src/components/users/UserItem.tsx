import { Link } from "react-router-dom";
import { UserType } from "../../types";

const UserItem = ({ user }: { user: UserType }) => {
  const { login, avatar_url } = user;

  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt={`${login}'s profile picture`} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
