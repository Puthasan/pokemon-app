import { useRef, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import "./LoginSignUp.css";

function LoginSignUp() {
  const userCtx = useContext(UserContext);
  const { setUser } = userCtx;



  const usernameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (usernameInputRef.current.value === "") {
      usernameInputRef.current.focus();
      return;
    }
    if (emailInputRef.current.value === "") {
      emailInputRef.current.focus();
      return;
    }
    if (passwordInputRef.current.value === "") {
      passwordInputRef.current.focus();
      return;
    }

    // make a GET request to the backend
    const res = await axios.post("http://localhost:3001/api/users/signin", {
      username: usernameInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    });

    console.log(res.data);
    setUser(res.data);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (usernameInputRef.current.value === "") {
      usernameInputRef.current.focus();
      return;
    }
    if (emailInputRef.current.value === "") {
      emailInputRef.current.focus();
      return;
    }
    if (passwordInputRef.current.value === "") {
      passwordInputRef.current.focus();
      return;
    }

    // make a POST request to the backend
    try {
      
      const res = await axios.post("http://localhost:3001/api/users/signup", {
        username: usernameInputRef.current.value,
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      });
      
      console.log(res.data);
      setUser(res.data);
      
    } catch (error) {
      console.log(error.message);
    }
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

            <label htmlFor="username">Username</label>
            <input
              ref={usernameInputRef}
              name="username"
              id="username"
              type="text"
              placeholder="Username"
            />
            <label htmlFor="email">Email</label>
            <input
              ref={emailInputRef}
              name="email"
              id="email"
              type="text"
              placeholder="Email"
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

            <label htmlFor="username">Username</label>
            <input
              ref={usernameInputRef}
              name="username"
              id="username"
              type="text"
              placeholder="Username"
            />
            <label htmlFor="email">Email</label>
            <input
              ref={emailInputRef}
              name="email"
              id="email"
              type="text"
              placeholder="Email"
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