import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { BASE_URL } from "../constants";
import Loader from "./Loader";
const CreateUser = () => {
  const [usernameInputFocus, setUsernameInputFocus] = useState(false);
  const [passwordInputFocus, setPasswordInputFocus] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // [1
  const auth = useAuth();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (username.length < 6 || password.length < 6) return;
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username.toLowerCase(), password }),
        credentials: "include",
     
      });
      const data = await res.json();
      const user = data.data.user;

      auth.setUser(user);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6 flex flex-col items-center gap-4 rounded-md bg-secondary p-12 pt-6 shadow-md">
      <h3 className="border-b-2 font-pixel text-2xl uppercase">User Info</h3>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-2"
        >
          <div
            className={`${
              usernameInputFocus && "ring-2 ring-blue-600"
            } rounded-[0.3rem] bg-primary p-2 text-white`}
          >
            <label htmlFor="fullname" className="sr-only">
              Fullname
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent placeholder:text-sm placeholder:text-gray-300  focus:outline-none"
              minLength="6"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setUsernameInputFocus(true)}
              onBlur={() => setUsernameInputFocus(false)}
              autoComplete="username"
              required
            />
            <span
              className={`border-l pl-2 ${
                username.length < 6 && "text-rose-500"
              }`}
            >
              <small>{`${username.length}`.padStart(2, "0")}</small>
            </span>
          </div>
          <div
            className={`${
              passwordInputFocus && "ring-2 ring-blue-600"
            } rounded-[0.3rem] bg-primary p-2 text-white`}
          >
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent placeholder:text-sm placeholder:text-gray-300  focus:outline-none"
              minLength="6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordInputFocus(true)}
              onBlur={() => setPasswordInputFocus(false)}
              autoComplete="current-password"
              required
            />
            <span
              className={`border-l pl-2 ${
                password.length < 6 && "text-rose-500"
              }`}
            >
              <small>{`${password.length}`.padStart(2, "0")}</small>
            </span>
          </div>
          <button
            type="submit"
            className="rounded-[0.3rem] bg-primary px-4 py-2 font-pixel transition-all duration-300 hover:bg-white hover:text-primary"
          >
            Submit
          </button>
          <p className="max-w-sm">
            <small>
              The name you enter will be used to signup or login you in in case
              you already have an account. The name must be and password at
              least{" "}
              <span className="text-base font-bold text-blue-600">6 </span>
              characters long.
            </small>
          </p>
        </form>
      )}
    </div>
  );
};

export default CreateUser;
