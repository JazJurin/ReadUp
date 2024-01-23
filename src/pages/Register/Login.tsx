import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context";
import LoginImg from "../../assets/images/LoginImg.jpeg"

export default function Login() {
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleLogin() {
    setIsLoggedIn(true);
    navigate("/");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Login failed");
      })
      .then((data) => {
        console.log(data.user);
        handleLogin();
      })
      .catch((error) => {
        setError("Login failed. Please check your credentials.");
        console.error("Error:", error);
      });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="flex justify-center items-center bg-cover h-screen"
      style={{ backgroundImage: `url(${LoginImg})` }}>
        <form
          className="bg-white bg-opacity-90 shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold text-black text-center mb-5">
            Login to Your Account
          </h1>
          <input
            className="w-full mb-4 rounded-md py-2 px-3 border bg-gray-200"
            type="text"
            placeholder="Email"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
          <input
            className="w-full mb-4 rounded-md py-2 px-3 border bg-gray-200"
            type="password"
            placeholder="Password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Login
          </button>
          <p className="mt-2 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
