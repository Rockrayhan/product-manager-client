import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const { loginUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get("email");
      const password = form.get("password");
  
      try {
        await loginUser(email, password);
        navigate(location?.state ? location.state : "/");
      } catch (error) {
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
            fetch("https://product-manager-server-1ewt.onrender.com/user", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(userInfo),
            })
            .then((res) => res.json())
            .then ( (data) => console.log(data)) ;
          }
        });
        navigate(location?.state ? location.state : "/");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-2 p-5 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-center mb-5 text-3xl">Login Please</h1>
        <form onSubmit={handleLogin}>
          <div className="form-control mb-4">
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
          <div className="form-control mb-4">
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
          <button type="submit" className="btn w-full custom-btn">
            Login
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        <div className="text-center my-3">
          <Link to="/register" className="text-blue-500 hover:underline">
            New User? Please Register
          </Link>
        </div>
        <div className="flex items-center my-3">
          <hr className="flex-grow" />
          <span className="mx-2">OR</span>
          <hr className="flex-grow" />
        </div>
        <div className="flex justify-center">
          <button onClick={handleGoogleLogin} className="btn btn-dark flex items-center mr-3 custom-btn">
            <span>Continue With Google</span>
            <img
              className="google-logo ml-2"
              src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png"
              alt="Google logo"
              style={{ width: '20px', height: '20px' }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
