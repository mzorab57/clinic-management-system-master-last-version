import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import GlobalContext from "../../contexts/createContext/context";
import { motion } from "framer-motion";

const Header = ({ showSildBar, setShowSildBar }) => {
  const location = useLocation();
  const { query, setQuery } = useContext(GlobalContext);
  return (
    // fixed bka headerka awaste
    <div
      className={` flex items-start w-full ${
        location.pathname === "/main" &&
        "bg-white h-[105px] 2xl:h-[125px] shadow shadow-gray-300 "
      }  pt-1  select-none `}
    >
      <div className={`flex justify-between items-center px-2.5 w-full mt-2`}>
        <motion.span
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
          className={`font-medium text-2xl 2xl:text-4xl hidden lg:block text-gray-600 capitalize`}
        >
          {/* nawi page */}

          {/* agar la sar loan bu nawi naxosh pshan bat */}
          {location.pathname === "/loan"
            ? location.state.sick_name
            : location.pathname.slice(1)}
        </motion.span>

     

        {/** search input */}
        {location.pathname !== "/detail" &&
          location.pathname !== "/sickdetail" &&
          location.pathname !== "/main" &&
          location.pathname !== "/report" &&
          location.pathname !== "/loan" && (
            <div className="search flex items-center rounded-full   bg-white/60 hover:bg-white p-1  w-[410px] 2xl:w-[500px] 2xl:h-12 shadow-sm ">
              <AiOutlineSearch size={22} className="text-sky-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className=" bg-transparent w-full focus:outline-none pl-2"
              />
            </div>
          )}

        {/** log out buuton */}
        {location.pathname === "/main" && (
          <Link
            onClick={() => {
              localStorage.removeItem("data");
            }}
            to="/login"
            className=" relative rounded-md  py-1  overflow-hidden group text-red-400   hover:bg-gradient-to-r hover:from-red-300 hover:to-red-300 hover:text-white transition-colors  ease-in duration-300"
          >
            <span className="absolute right-0 w-14 h-36 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative px-5 2xl:text-2xl">Log Out</span>
          </Link>
        )}
           {/* menu */}
        <AiOutlineMenu
          onClick={() => setShowSildBar(!showSildBar)}
          className="lg:hidden cursor-pointer m-2"
          color="gray"
          size={30}
        />
      </div>
    </div>
  );
};

export default Header;
