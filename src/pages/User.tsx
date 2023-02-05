import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLink, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
import Loader from "../components/layout/Loader";
import GithubContext from "../context/github/GithubContext";
import { GithubContextType } from "../types";
import RepoList from "../components/repos/RepoList";
import { getUserAndRepos } from "../context/github/GithubActions";

const User = () => {
  const { user, loading, repos, dispatch } = useContext(
    GithubContext
  ) as GithubContextType;

  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });

    const getUserData = async () => {
      if (!params.login) return;

      const userData = await getUserAndRepos(params.login);
      dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
    };

    getUserData();
  }, [dispatch, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return (
      <div className="hero">
        <Loader />
      </div>
    );
  }

  const websiteUrl = blog?.startsWith("http") ? blog : "https://" + blog;

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-12">
          <Link to="/search" className="btn">
            Back To Search
          </Link>
        </div>

        {/* User Info */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 mb-8 shadow-lg sm:p-5">
          <div className="col-span-12 sm:col-span-5 xl:col-span-3 flex flex-col gap-5">
            <figure>
              <img
                src={avatar_url}
                alt={`${login}'s profile picture`}
                className="rounded-full shadow-xl w-24 h-24"
              />
            </figure>

            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-4">
                <VscGithubAlt color="white" /> {login}
              </span>

              {location && (
                <span className="flex items-center gap-4">
                  <GoLocation color="white" /> {location}
                </span>
              )}
              {blog && (
                <span className="flex items-center gap-4">
                  <AiOutlineLink color="white" />{" "}
                  <a href={websiteUrl} target="_blank" rel="noreferrer">
                    {websiteUrl}
                  </a>
                </span>
              )}
              {twitter_username && (
                <span className="flex items-center gap-4">
                  <AiOutlineTwitter color="white" />{" "}
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {twitter_username}
                  </a>
                </span>
              )}
            </div>
          </div>

          <div className="col-span-12 sm:col-span-7 xl:col-span-9">
            <div className="mb-6 flex flex-col gap-4 justify-between h-full">
              <h1 className="text-3xl">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p className="max-w-prose">{bio}</p>
              <div>
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats stats-vertical md:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaUsers className="text-3xl" />
            </div>
            <div className="stat-title">Followers</div>
            <div className="stat-value text-xl">{followers}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-primary">
              <FaUserFriends className="text-3xl" />
            </div>
            <div className="stat-title">Following</div>
            <div className="stat-value text-xl">{following}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-primary">
              <FaCodepen className="text-3xl" />
            </div>
            <div className="stat-title">Public Repos</div>
            <div className="stat-value text-xl">{public_repos}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-primary">
              <FaStore className="text-3xl" />
            </div>
            <div className="stat-title">Public Gists</div>
            <div className="stat-value text-xl">{public_gists}</div>
          </div>
        </div>

        {/* Lists of Recent Repositories */}
        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default User;
