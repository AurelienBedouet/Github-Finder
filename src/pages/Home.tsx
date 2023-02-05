import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="mb-12">
        <h1 className="text-6xl mb-4">Github Finder</h1>
        <p className="mb-4 text-2xl font-light">
          A React app to search GitHub profiles and see profile details.
        </p>
      </div>
      <div>
        <Link to="/search" className="btn rounded-btn">
          Search a Github Profile
        </Link>
      </div>
    </>
  );
};

export default Home;
