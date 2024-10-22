import { useContext, useState, useEffect } from "react";
import { Auth } from "./AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

function Home() {
  const { user, dispatch } = useContext(Auth);
  console.log(user, dispatch);
  const [username, setUsername] = useState();

  axios.defaults.headers.common["Authorization"] = user;

  const handle = () => {
    dispatch({ type: "Logout" });
    localStorage.removeItem("token");
  };

  const getProfile = async () => {
    try {
      await axios.get("https://zidio-backend-flame.vercel.app/profile").then((res) => {
        console.log(res);
        setUsername(res.data.message);
      });
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <div className="bg-[#000842] h-screen flex justify-center items-center">
        <h1 className="text-white">Welcome {user && username}</h1>
        <button className="border-none p-2 bg-blue-400 rounded-md" onClick={handle}>
          Logout
        </button>
      </div>
    </>
  );
}

export default Home;
