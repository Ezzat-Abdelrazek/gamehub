const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-2 text-center lg:gap-4">
      <h2 className="text-4xl lg:text-6xl lg:font-bold">
        Welcome to the <br />
        <span className="text-secondary text-4xl font-bold lg:text-7xl">G</span>
        aming
        <span className="text-secondary text-4xl font-bold lg:text-7xl">H</span>
        ub
      </h2>
      <div className="space-y-2">
        <h3 className="text-lg font-light uppercase tracking-wide text-gray-200 lg:text-xl">
          Where Gamming Make sense
        </h3>
        <p className="max-w-lg text-sm text-gray-300 lg:text-base">
          Welcome to GameHub, your ultimate destination for all things gaming.
          <span className="text-secondary font-bold"> Immerse</span> yourself in
          a world where{" "}
          <span className="text-secondary font-bold">passion</span> meets play,
          and level up your gaming experience like never before. Get ready to
          <span className="text-secondary font-bold"> embark</span> on an epic
          journey through the ever-evolving universe of video games, right here
          at <span className="text-secondary font-bold">GameHub!</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
