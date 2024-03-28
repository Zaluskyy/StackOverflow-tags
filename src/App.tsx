import React, { useContext } from "react";
import "./style/App.scss";

import StickyHeadTable from "./components/Table";
import MediportaContext from "./context/context";
import LinksPopUp from "./components/LinksPopUp";
import DataFetcher from "./services/DataFetcher";

import { AnimatePresence } from "framer-motion";

function App() {
  const context = useContext(MediportaContext);
  const { showMoreLinks, linksPopUpData } = context;

  return (
    <div className="App">
      <DataFetcher />
      <StickyHeadTable />
      <AnimatePresence>
        {showMoreLinks && <LinksPopUp row={linksPopUpData} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
