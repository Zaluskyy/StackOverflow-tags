import React, { createContext, ReactNode, useState } from "react";

import { TagItem } from "../types/types";

const MediportaContext = createContext<any>({} as any);

export const MediportaContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [tagList, setTagList] = useState<TagItem[]>([]);

  const [showMoreLinks, setShowMoreLinks] = useState(false);
  const [linksPopUpData, setLinksPopUpData] = useState({});

  return (
    <MediportaContext.Provider
      value={{
        tagList,
        setTagList,
        showMoreLinks,
        setShowMoreLinks,
        linksPopUpData,
        setLinksPopUpData,
      }}
    >
      {children}
    </MediportaContext.Provider>
  );
};

export default MediportaContext;
