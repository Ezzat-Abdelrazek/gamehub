import GameHeroParagraph from "./GameHeroParagraph";

const MathPageHero = () => {
  return (
    <>
      <h2 className="text-4xl lg:text-6xl lg:font-bold">
        Welcome to the{" "}
        <span className="text-5xl text-secondary lg:text-7xl">Q</span>uick Math
        Challenge
      </h2>
      <GameHeroParagraph />
    </>
  );
};

export default MathPageHero;
