import React, { useContext, useEffect } from "react";
import "../style/LinksPopUp.scss";
import MediportaContext from "../context/context";
import exitIcon from "../icon/exit.svg";
import { motion } from "framer-motion";

import { IRow } from "../types/types";

interface LinksPopUpProps {
  row: IRow;
}

const LinksPopUp: React.FC<LinksPopUpProps> = ({ row }) => {
  const { link, tag } = row;

  const context = useContext(MediportaContext);
  const { setShowMoreLinks, setLinksPopUpData } = context;

  const closePopUp = () => {
    setShowMoreLinks(false);
    setLinksPopUpData({});
  };

  const links = link.map((link) => {
    return (
      <li key={link}>
        <a href={link} target="_blank">
          {link}
        </a>
      </li>
    );
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="LinksPopUpBackground"
        onClick={closePopUp}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="LinksPopUp"
      >
        <motion.div
          whileHover={{ scale: 1.3, rotate: 15 }}
          className="exitContainer"
          onClick={closePopUp}
        >
          <img src={exitIcon} alt="exit" />
        </motion.div>
        <h1>{tag.toUpperCase()}</h1>
        <ul>{links}</ul>
      </motion.div>
    </>
  );
};

export default LinksPopUp;
