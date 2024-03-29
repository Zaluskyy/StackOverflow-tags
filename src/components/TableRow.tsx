import React, { useContext, useEffect, useState } from "react";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MediportaContext from "../context/context";

import { RowProps } from "../types/types";

const Row: React.FC<RowProps> = ({ columns, row }) => {
  const context = useContext(MediportaContext);
  const { setShowMoreLinks, setLinksPopUpData } = context;

  const [showLinks, setShowLinks] = useState(0);

  useEffect(() => {
    if (showLinks) {
      setShowMoreLinks(true);
      setLinksPopUpData(row);
    }
  }, [showLinks]);

  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      key={row.count}
      className="dataRow"
    >
      {columns.map((column) => {
        const value = row[column.id];
        if (typeof value == "object") {
          if (value.length > 1) {
            return (
              <TableCell
                style={{ cursor: "pointer" }}
                onClick={() => setShowLinks((prev) => prev + 1)}
                key={column.id}
                align={column.align}
              >
                <span>See links</span>
              </TableCell>
            );
          } else {
            const shortLink = value[0].slice(0, 50) + "...";
            return (
              <TableCell key={column.id} align={column.align}>
                <a href={value} target="_blank">
                  {shortLink}
                </a>
              </TableCell>
            );
          }
        } else {
          return (
            <TableCell key={column.id} align={column.align}>
              {column.format && typeof value === "number"
                ? column.format(value)
                : value}
            </TableCell>
          );
        }
      })}
    </TableRow>
  );
};

export default Row;
