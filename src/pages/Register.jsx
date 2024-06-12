import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const displayName = form.get("displayName");
    const photoURL = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");

    console.log("Form data:", { displayName, photoURL, email, password });

    try {
      // Create a new user
      const userData = await createUser(email, password, displayName, photoURL);
      console.log("User created:", userData);

      if (userData?.user?.email) {
        const userInfo = {
          email: userData.user.email,
          name: displayName,
          photoURL:photoURL,
        };
        console.log("User info to be sent:", userInfo);

        const response = await fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });
        const responseData = await response.json();
        console.log("Response from server:", responseData);

        if (response.ok) {
          navigate(location?.state ? location.state : "/");
        } else {
          throw new Error(responseData.message || "Failed to register user");
        }
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn().then((data) => {
        if (data?.user?.email) {
          const userInfo = {
            email: data?.user?.email,
            name: data?.user?.displayName,
          };
          fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      });
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center my-5 text-3xl">Please Register</h1>

      <div className="border border-3 p-5 rounded-lg shadow-lg w-1/2 mx-auto mb-2">
        <form onSubmit={handleRegister}>
          <div className="form-control mb-3">
            <label className="label" htmlFor="formBasicDisplayName">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              id="formBasicDisplayName"
              placeholder="Enter your full name"
              name="displayName"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mb-3">
            <label className="label" htmlFor="formBasicPhotoURL">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              id="formBasicPhotoURL"
              placeholder="Enter photo URL"
              name="photoURL"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mb-3">
            <label className="label" htmlFor="formBasicEmail">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              id="formBasicEmail"
              placeholder="Enter email"
              name="email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mb-3">
            <label className="label" htmlFor="formBasicPassword">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              id="formBasicPassword"
              placeholder="Password"
              name="password"
              className="input input-bordered w-full"
            />
          </div>

          <button type="submit" className="btn btn-success custom-btn w-full">
            Register
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <div className="text-center my-3">
          <Link to="/login" className="text-blue-500 hover:underline ">
            Already Registered? Please Login
          </Link>
        </div>
        <div className="flex items-center my-3">
          <hr className="flex-grow" />
          <span className="mx-2">OR</span>
          <hr className="flex-grow" />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-dark flex items-center mr-3 custom-btn"
          >
            <span>Continue With Google</span>
            <span>
              <img
                className="google-logo ml-2"
                src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png"
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
