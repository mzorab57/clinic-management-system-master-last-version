import { useState } from "react";
import MainRoutes from "../../routes/Routes";
import SideBar from "../../layout/sidebar/SideBar";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  const [showSildBar, setShowSildBar] = useState(false);

  return (
    <div className={`Home flex  h-screen `}>
      {/** am sibar la naw am home ya ka body borserkaia tanha la login dar nakawe  */}

      <div className="h-screen">
        {location.pathname !== "/login" && (
          <SideBar showSildBar={showSildBar} setShowSildBar={setShowSildBar} />
        )}
      </div>

      <div className="flex-1 overflow-auto ">
        <MainRoutes showSildBar={showSildBar} setShowSildBar={setShowSildBar} />
      </div>
    </div>
  );
};

export default Home;
