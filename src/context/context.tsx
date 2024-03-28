import React, { createContext, ReactNode, useState } from "react";

import { TagItem } from "../types/types";

const MediportaContext = createContext<any>({} as any);

export const MediportaContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showMoreLinks, setShowMoreLinks] = useState(false);
  const [linksPopUpData, setLinksPopUpData] = useState({});

  const [tagList, setTagList] = useState<TagItem[]>([]);

  return (
    <MediportaContext.Provider
      value={{
        showMoreLinks,
        setShowMoreLinks,
        linksPopUpData,
        setLinksPopUpData,
        tagList,
        setTagList,
      }}
    >
      {children}
    </MediportaContext.Provider>
  );
};

export default MediportaContext;
