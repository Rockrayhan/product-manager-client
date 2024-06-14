import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updatePassword, updateProfile } from "firebase/auth";


const UserProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();


  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`https://product-manager-server-1ewt.onrender.com/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);



//   update profile
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    const userData = {
      name,
      email: userInfo?.email,
      photoURL,
    };

    console.log(userData);

    fetch(`https://product-manager-server-1ewt.onrender.com/user/${userInfo?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };



//   update password


const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
        if (password) {
            await updatePassword(user, password);
            setMessage("Password updated successfully");
        }
    } catch (error) {
        setMessage(error.message);
    }
};




  const demoImg =
    "https://i.pinimg.com/280x280_RS/e1/08/21/e10821c74b533d465ba888ea66daa30f.jpg";

  return (
    <div className="container mx-auto p-5">
      <div className="rounded-lg shadow-lg p-5">
        <h1 className="text-2xl font-bold mb-5"> Current Information</h1>
        <h3 className="mb-2">Name: {userInfo?.name}</h3>
        <h3 className="mb-5">Email: {userInfo?.email}</h3>
        <div>
          <img
            className="profile-img"
            src={userInfo?.photoURL || demoImg}
            alt=""
          />
        </div>
      </div>

      <div className="center my-10">
        <div className="border border-3 p-5 rounded-lg shadow-lg w-3/5">
          <h1 className="text-xl font-bold mb-5">Change Information</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-control mb-3">
              <label className="label" htmlFor="displayName">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="displayName"
                name="name"
                defaultValue={userInfo?.name}
                // placeholder={userInfo?.name}
                //   onChange={(e) => setDisplayName(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control mb-3">
              <label className="label" htmlFor="displayName">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={userInfo?.email}
                disabled
                // placeholder={userInfo?.name}
                //   onChange={(e) => setDisplayName(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control mb-3">
              <label className="label" htmlFor="photoURL">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                id="photoURL"
                name="photoURL"
                defaultValue={userInfo?.photoURL}
                placeholder="Enter new photo URL"
                //   onChange={(e) => setPhotoURL(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            
            <div className="center">
              <button type="submit" className="btn custom-btn w-2/5">
                Update Profile
              </button>
            </div>

          </form>


          <form className="center" onSubmit={handleUpdateProfile}>
            <div>
                
          <div className="form-control mb-3 mt-10">
              <label className="label" htmlFor="password">
                <span className="label-text">New Password</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter New Password"
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-3">
              <label className="label" htmlFor="confirmPassword">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm New Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            <div className="center">
              <button type="submit" className="btn custom-btn w-2/5">
                Update Password
              </button>
            </div>
            </div>
          </form>

          <div className="my-7">
              {message && (
                <span>
                  <div role="alert" className="alert bg-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="stroke-current shrink-0 w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span> {message} </span>
                  </div>
                </span>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
