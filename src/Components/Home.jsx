import { useContext, useState } from "react";
import {Auth} from "./AuthContext"
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Home(){
       const {user,dispatch}= useContext(Auth);
       console.log(user,dispatch);
       const [username,setusername] = useState()
       axios.defaults.headers.common["Authorization"] =user;
       const handle =() =>{
        dispatch({type:"Logout"});
        localStorage.removeItem("token")
       }
       const getprofile = async () =>{
          try {
<<<<<<< HEAD
          await axios.get("https://zidio-backend-dgyt8e87i-devendra279s-projects.vercel.app/profile").then((res)=>{
=======
          await axios.get("https://zidio-backend-flame.vercel.app/profile").then((res)=>{
>>>>>>> 89d3c30a10c05db96ad83d52bd6b469efcab0cec
          console.log(res);
          setusername(res.data.message);})
          }catch(err){
               toast.error(err.response.data.message)
           }
          }
    useEffect(()=>{
        getprofile();
      },[])
    return <>
     <div className="bg-[#000842] h-screen flex justify-center items-center">
     <h1 className=" text-white">Welcome { user && username} </h1>
    <button className="border border-none border-black p-2 bg-blue-400 rounded-md" onClick={()=>{handle()}}>Logout</button>
      </div> 
    </>
}

export default Home 
