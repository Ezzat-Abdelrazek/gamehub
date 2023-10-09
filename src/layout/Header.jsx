import Logo from "../components/Logo";

const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-[1080px] flex-col items-center justify-between rounded-full bg-white/25 px-8 py-2 shadow-md backdrop-blur-lg sm:flex-row">
      <Logo />
      <h2 className="font-pixel text-center text-base uppercase sm:text-lg">
        Where Gaming Dreams Level Up!
      </h2>
    </header>
  );
};

export default Header;
