import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
const Signup = () => {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const userCollectionRef = collection(db, "User");
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    const user = createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    )
      .then(() => {
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        alert(`User Already Exist`);
        console.log(error);
      });
    const data = addDoc(userCollectionRef, {
      Name: registerName,
      Email: registerEmail,
    })
      .then(() => {
        console.log(`Success User Added Successfully`);
      })
      .catch((error) => {
        console.log(error);
      });
    // The Below one is the asynchronus function that
    // try {
    //   const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    //   console.log(user);
    // } catch (error) {
    //   console.log(error.message);
    // }
  };
  return (
    <>
      {/* The below line is commented by me */}
      {/* <h1 className="sign-up">Sign Up</h1> */}
      <div
        style={{ display: "flex", justifyContent: "center", padding: "100px" }}
      >
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                onChange={(event) => {
                  setRegisterName(event.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
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
                  setRegisterPassword(event.target.value);
                }}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={register}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
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

export default Signup;
