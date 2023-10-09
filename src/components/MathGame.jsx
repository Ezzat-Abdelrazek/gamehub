import io from "socket.io-client";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import Loader from "./Loader";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
const MathGame = ({ setTime }) => {
  const [equation, setEquation] = useState("");
  const [answer, setAnswer] = useState("");
  const [socket, setSocket] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(0);

  const auth = useAuth();

  useEffect(() => {
    let socketInstance;
    const startGame = async () => {
      socketInstance = io("http://localhost:3000");

      socketInstance.on("connect", async () => {
        try {
          setIsLoading(true);

          const res = await fetch(`${BASE_URL}/equation`, {
            credentials: "include",
          });
          const data = await res.json();
          const equation = data.data.equation;

          setEquation(equation);

          socketInstance.on("tick", (time) => setTime(time));
          socketInstance.emit("game-start");

          setSocket(socketInstance);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      });
    };
    startGame();

    return () => socketInstance?.close();
  }, [setTime]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!answer) return;

    socket.emit("game-over", {
      equationId: equation._id,
      answer,
      userId: auth.user._id,
    });
    socket.on("get-score", async (score) => {
      setScore(score);
      const res = await fetch(`${BASE_URL}/user/${auth.user._id}/score`, {
        method: "POST",
        body: JSON.stringify({ score }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const { data } = await res.json();

      auth.setUser(data.user);
      socket.disconnect();
    });
  };

  return (
    <div className="space-y-4">
      {score ? (
        <div className="flex flex-col gap-6">
          <p className="rounded-md bg-secondary px-2 py-4 text-2xl uppercase tracking-widest">
            Your Score is <strong>{score}</strong>
          </p>
          <Link
            to="/games/quick-math/leaderboard"
            className="rounded-md bg-rose-600 px-2 py-4 text-xs uppercase tracking-widest"
          >
            Click here to see the Leaderboard
          </Link>
        </div>
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <h3 className="rounded-md bg-secondary px-4 py-8 text-2xl font-bold">
            {equation.question}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label aria-label="equation">
                <input
                  type="number"
                  placeholder="Answer"
                  required
                  onChange={(e) => setAnswer(e.target.value)}
                  value={answer}
                  className="rounded-md px-4 py-2 text-primary focus:outline-none focus:ring-4 "
                />
              </label>
            </div>
            <button className="rounded-md bg-white px-2 py-4 font-pixel text-2xl font-bold text-primary">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default MathGame;
