import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContextConsumer } from "../Context/AuthContext";

const NavBar = () => {
  const { user, logout } = AuthContextConsumer();
  const redirect = useNavigate()

  const handleClick = async () => {
    try {
      await logout()
      redirect('/')
    } catch (error) {
      console.log(error)
    }
  }

  const buttonDisplay = user?.email ? (
    <button className="font-bold" onClick={handleClick}>Logout</button>
  ) : (
    <Link to={"/signin"}>Sign in</Link>
  );
  return (
    <div className="flex justify-between bg-gray-200 w-full p-4">
      <h1 className="text-center text-2xl font-bold">
        Firebase Google Auth & context
      </h1>
      {buttonDisplay}
    </div>
  );
};

export default NavBar;
