import React, { useContext, useEffect } from "react";
import "./style/App.scss";

import StickyHeadTable from "./components/Table";
import MediportaContext from "./context/context";
import LinksPopUp from "./components/LinksPopUp";
import DataFetcher from "./services/DataFetcher";

import { AnimatePresence } from "framer-motion";
import Loading from "./components/Loading";

function App() {
  const context = useContext(MediportaContext);
  const { showMoreLinks, linksPopUpData, tagList, setMobile } = context;

  const getWidth = () => {
    if (window.innerWidth <= 600) setMobile(true);
    else setMobile(false);
  };

  useEffect(() => {
    getWidth();
    window.addEventListener("resize", getWidth);
    return () => window.removeEventListener("resize", getWidth);
  }, []);

  return (
    <div className="App">
      <DataFetcher />
      {tagList.length == 0 && <Loading />}
      {tagList.length > 0 && <StickyHeadTable tagList={tagList} />}
      <AnimatePresence>
        {showMoreLinks && <LinksPopUp row={linksPopUpData} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
