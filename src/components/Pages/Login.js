import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  const login = (e) => {
    // try {
    //     const user = signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    //     navigate('/');
    //     console.log(user);
    // } catch (error) {
    //     console.log(error.message);
    // }
    e.preventDefault();
    const user = signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(`Invalid Credentailas`);
        console.log(error);
      });
  };
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "100px" }}
      >
        <div className="w-full max-w-xs">
          <form
            onSubmit={login}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  navigate("/sign-up");
                }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
