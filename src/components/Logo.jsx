import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src="/logo.png" alt="Gamehub Logo" className="w-12" />
      <h1 className="font-pixel text-lg uppercase sm:text-2xl">Gamehub</h1>
    </Link>
  );
};

export default Logo;
