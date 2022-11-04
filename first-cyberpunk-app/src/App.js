import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Homepage,
  Berserk,
  Cyberdeck,
  Sandevistan,
  Rarity,
  Manufacturer,
  Comparison,
} from "./pages";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";


const App = () => {
  const {activeMenu} = useStateContext()
  

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dar-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-grey text-white"
                style={{ background: "#f5e238", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div
              className="w-72 fixed sidebar
              dark:bg-secondary-dark-bg 
              bg-white"
            >
              <Sidebar/>
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar/>
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg
                min-h-screen w-full ${activeMenu}
                'md:ml-72': 'flex-2'`}
          >
            <div
              className="fixed md:static
              bg-main-bg dark:bg-main-dark-bg
              navbar w-full"
            >
              <Navbar/>
            </div>
            <Routes>
              {/* Tables*/}
              <Route path="/" element={<Homepage />} />
              <Route path="/Berserk" element={<Berserk />} />
              <Route path="/Cyberdeck" element={<Cyberdeck />} />
              <Route path="/Sandevistan" element={<Sandevistan />} />

              {/*Charts */}
              <Route path="/Manufactura" element={<Manufacturer />} />
              <Route path="/Rareza" element={<Rarity />} />
              <Route path="/Tipo" element={<Comparison />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
