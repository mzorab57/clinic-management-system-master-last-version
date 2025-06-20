import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../../assets/image/login.gif";
//import { RxLockClosed, RxPerson } from "react-icons/rx";
import { TiLockClosed, TiUser } from "react-icons/ti";
// import { GiHospitalCross } from "react-icons/gi";
import api from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { motion } from "framer-motion";
import GlobalContext from "../../contexts/createContext/context";

const Login = () => {
  // am fetch sick bo awaia ka login buu dwraba fetch sick bkatawa chun la sick ,
  // userid u role abe bnery ka nard abe dwbara fetch bkawatawa
  const { fetchSick } = useContext(GlobalContext);
  const history = useNavigate();

  const [admin_name, setUsername] = useState("");
  const [admin_password, setPassword] = useState("");
  const [role, setRole] = useState("managment");
  const [loading, setLoading] = useState(false);

  //   fetch admin
  const fetchAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const res = await api.post("login.php", {
      username: admin_name,
      password: admin_password,
      role: role,
    });

    
    if (res.data.status !== "bad") {
      setLoading(false);
      localStorage.setItem("data", JSON.stringify(res.data));
      const user = localStorage.getItem("data");
      // console.log("JSON.parse(user).token");
      // console.log(JSON.parse(user).token);
      fetchSick();

      history("/main", { state: user });
    } else {
      toast.error("user not found", {
        className: "error-toast",
        draggable: true,
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer limit={2} />
      <div className="select-none bg-white   w-full h-screen flex items-center justify-center overflow-hidden">
        <div
          className="relative overflow-hidden bg-white md:bg-gradient-to-l from-sky-300 via-white
                 to-white  h-96 mx-2 px-2 w-full md:w-[700px]  lg:w-[900px] lg:h-2/3 xl:w-[1050px]
                  xl:h-3/4 2xl:w-[1300px] 2xl:h-3/4 flex items-center   justify-between shadow-xl
                   rounded-md  border-sky-300/90 border md:border-4"
        >
          {/* div lay chap */}
          <div className="flex flex-col mx-auto  w-full md:max-w-xs lg:max-w-sm xl:max-w-md">
            {/** logo login */}
            {/* <motion.div
              animate={{
                y: 10,
                opacity: 1,
              }}
              initial={{
                y: -100,
                opacity: 0.1,
              }}
              transition={{
                duration: 1,
              }}
              className="absolute top-0 md:top-0.5 lg:top-1.5 xl:top-2.5 "
            >
              <GiHospitalCross
                size={30}
                className="text-sky-500  scale-75 md:scale-90 lg:scale-100 xl:scale-125 "
              />
            </motion.div> */}

            <form
              onSubmit={fetchAdmin}
              className="flex flex-col gap-8 md:gap-4 lg:gap-8  w-full"
            >
              <motion.div
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                initial={{
                  x: -100,
                  // opacity: 0.1
                }}
                transition={{
                  duration: 1,
                }}
              >
                <p
                  className="font-bold text-sky-400  xl:w-20 lg:w-16 tracking-wider
                             text-start pb-2 md:mb-14  text-md lg:text-xl xl:text-2xl border-b-2 border-b-sky-400  w-12 "
                >
                  Login
                </p>

                <div className="w-full mt-3">
                  <label className="text-gray-500 text-lg">Role</label>
                  <select
                    required
                    onChange={(e) => setRole(e.target.value)}
                    className="2xl:placeholder:text-xl bg-transparent w-full focus:ring-1 focus:outline-none rounded border    2xl:mb-0 p-1.5  "
                  >
                   
                    <option value="managment">managment</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </div>

                <motion.div
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  initial={{
                    x: -100,
                    opacity: 0.1,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  className=" w-12 xl:w-20 lg:w-16"
                ></motion.div>
              </motion.div>

              {/** username input */}
              <motion.div
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                initial={{
                  x: -100,
                  opacity: 0.1,
                }}
                transition={{
                  duration: 1.5,
                }}
                className="relative "
              >
                <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                  className={`${admin_name && "border-b border-b-sky-400"}
                                     w-full placeholder-slate-400 pl-12 placeholder:text-sm text-xs md:placeholder:text-md lg:placeholder:text-lg py-1.5 lg:py-3 px-1 
                                  focus:ring-0 bg-transparent  focus:border-sky-400 focus:outline-none focus:placeholder:text-gray-300  border-b  border-b-gray-300   `}
                />
                <TiUser
                  size={25}
                  className={`absolute top-0.5 md:top-1 lg:top-1.5 ml-2  text-sky-400 border-sky-400`}
                />
              </motion.div>

              {/** password input */}
              <motion.div
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                initial={{
                  x: -100,
                  opacity: 0.1,
                }}
                transition={{
                  duration: 1.8,
                }}
                className="relative "
              >
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className={`${
                    admin_password && "border-b border-b-sky-400"
                  } first-letter: w-full placeholder-slate-400 pl-12 placeholder:text-sm text-xs md:placeholder:text-md lg:placeholder:text-lg py-1.5 lg:py-3 px-1 
                                bg-transparent  focus:ring-0  focus:border-sky-400 focus:outline-none focus:placeholder:text-gray-300 border-b  border-b-gray-300 `}
                />
                <TiLockClosed
                  size={23}
                  className=" absolute top-0.5 md:top-1 lg:top-2 ml-2 pointer-events-none text-sky-400"
                />
              </motion.div>

              {/** button login */}
              <motion.div
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                initial={{
                  x: -100,
                  opacity: 0.1,
                }}
                transition={{
                  duration: 2.1,
                }}
                className="w-full"
              >
                <button
                  type="submit"
                  className={`border border-sky-300 py-0.5  md:py-1 lg:py-1.5 shadow-md rounded-3xl text-white
                                 text-md md:text-lg xl:text-xl tracking-wider text-center bg-sky-400
                                  hover:bg-sky-300 transition duration-300 w-full  `}
                >
                  Login
                </button>
              </motion.div>
            </form>
          </div>

          {/* div lay rast */}
          <div className=" bg-transparent hidden md:block mx-auto">
            <img
              src={login}
              alt="im"
              className="bg-transparent max-w-xs lg:max-w-sm xl:max-w-md "
            />
          </div>
        </div>
      </div>

      {loading && (
        <div className="absolute top-[40%] left-[50%] bg-white/60 p-1  rounded  border-l border-l-sky-100 ">
          <h1 className="text-xl tracking-wider">Loding...</h1>
        </div>
      )}
    </div>
  );
};

export default Login;
