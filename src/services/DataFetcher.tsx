import React, { useContext, useEffect, useState } from "react";
import MediportaContext from "../context/context";

import { TagItem } from "../types/types";

const url =
  "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow";

const DataFetcher = () => {
  const context = useContext(MediportaContext);
  const { setTagList } = context;

  useEffect(() => {
    return () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const tags: { [key: string]: string[] } = {};
          data.items.forEach((item: any) => {
            item.tags.forEach((tag: string) => {
              if (!tags[tag]) {
                tags[tag] = [item.link];
              } else {
                tags[tag].push(item.link);
              }
            });
          });
          const tagArray: TagItem[] = Object.keys(tags).map((tag) => ({
            tag,
            links: tags[tag],
          }));
          setTagList(tagArray);
        });
    };
  }, []);
  return <div></div>;
};

export default DataFetcher;
