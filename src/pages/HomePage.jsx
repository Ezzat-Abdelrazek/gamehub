import Games from "../components/Games";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="space-y-16">
      <Hero />
      <Games />
    </div>
  );
};

export default HomePage;
