import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto flex justify-between px-2">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <FaGithub className="text-3xl" />
            <span className="text-lg font-bold">Github Finder</span>
          </Link>
        </div>

        <div>
          <Link to="/search" className="btn btn-ghost btn-sm rounded-btn">
            Search
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
