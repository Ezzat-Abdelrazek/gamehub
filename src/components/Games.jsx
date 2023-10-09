import MathGameCard from "./MathGameCard";
const Games = () => {
  return (
    <section className="space-y-8">
      <h2 className="inline-block border-b border-b-secondary text-3xl font-bold">
        Games
      </h2>
      <div className="flex items-start gap-4">
        <MathGameCard />
      </div>
    </section>
  );
};

export default Games;
