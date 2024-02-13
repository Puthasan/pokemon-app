import { useRef, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

function LoginSignUp() {
  const userCtx = useContext(UserContext);
  const { setUser } = userCtx;

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (emailInputRef.current.value === "") {
      emailInputRef.current.focus();
      return;
    }
    if (passwordInputRef.current.value === "") {
      passwordInputRef.current.focus();
      return;
    }

    // make a POST request to the backend
    const res = await axios.get("http://localhost:3001/api/users/signin", {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    });

    console.log(res.data);
    setUser(res.data);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (emailInputRef.current.value === "") {
      emailInputRef.current.focus();
      return;
    }
    if (passwordInputRef.current.value === "") {
      passwordInputRef.current.focus();
      return;
    }

    // make a POST request to the backend
    const res = await axios.post("http://localhost:3001/api/users/signup", {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    });

    console.log(res.data);
    setUser(res.data);
  };

  return (
    <main>
      <h1>Login/Sign Up</h1>

      {showSignUp ? (
        <div>
          <form
            onSubmit={handleSignIn}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <h3>Sign In</h3>
            <label htmlFor="email">Email</label>
            <input
              ref={emailInputRef}
              name="email"
              id="email"
              type="text"
              placeholder="Email or phone"
            />
            <label htmlFor="password">Password</label>
            <input
              ref={passwordInputRef}
              name="password"
              id="password"
              type="text"
            />
            <button type="submit">Sign In</button>
          </form>
          <span>
            Don't have an account?{" "}
            <button onClick={() => setShowSignUp(!showSignUp)}>Sign Up</button>
          </span>
        </div>
      ) : (
        <div>
          <form
            onSubmit={handleSignUp}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <h3>Sign Up</h3>
            <label htmlFor="email">Email</label>
            <input
              ref={emailInputRef}
              name="email"
              id="email"
              type="text"
              placeholder="Email or phone"
            />
            <label htmlFor="password">Password</label>
            <input
              ref={passwordInputRef}
              name="password"
              id="password"
              type="text"
            />
            <button type="submit">Sign Up</button>
          </form>
          <span>
            Already have an account?{" "}
            <button onClick={() => setShowSignUp(!showSignUp)}>Sign In</button>
          </span>
        </div>
      )}
    </main>
  );
}

export default LoginSignUp;