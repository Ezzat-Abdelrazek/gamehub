import Gradient from "./components/Gradient";
import Header from "./layout/Header";
import Main from "./layout/Main";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import MathGamePage from "./pages/MathGamePage";
import Leaderboeard from "./components/Leaderboeard";

function App() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1920px] flex-col overflow-x-hidden bg-primary p-4 font-sans text-white">
      <Gradient />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games/quick-math" element={<MathGamePage />} />
          <Route
            path="/games/quick-math/leaderboard"
            element={<Leaderboeard />}
          />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
