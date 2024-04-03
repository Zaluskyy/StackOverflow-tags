import React, { useContext, useEffect, useState } from "react";
import "../style/Table.scss";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import Row from "./TableRow";

import { Data, Column, TagItem, ISortOrder } from "../types/types";
import MediportaContext from "../context/context";
import SelectSmall from "./Select";
import Search from "./Search";

interface StickyHeadTableProps {
  tagList: TagItem[];
}

const StickyHeadTable: React.FC<StickyHeadTableProps> = ({ tagList }) => {
  const context = useContext(MediportaContext);
  const { mobile } = context;

  const [rows, setRows] = useState<Data[]>([]);

  const [sortOrder, setSortOrder] = useState<ISortOrder>("");
  const [search, setSearch] = useState<string>("");

  const columns: readonly Column[] = [
    { id: "tag", label: "tag", minWidth: mobile ? 100 : 190 },
    { id: "count", label: "count", minWidth: mobile ? 10 : 30 },
    { id: "link", label: "link", minWidth: mobile ? 100 : 273 },
  ];

  useEffect(() => {
    let filteredList = tagList;

    if (search !== "") {
      filteredList = filteredList.filter((item: TagItem) =>
        item.tag.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortOrder === "") {
      const tagListArr = filteredList.map((item: TagItem) => ({
        tag: item.tag,
        count: item.links.length,
        link: item.links,
      }));
      setRows(tagListArr);
    } else if (sortOrder === "ASCENDING") {
      const sortedTagListArr = [...filteredList].sort(
        (a, b) => a.links.length - b.links.length
      );
      const rows = sortedTagListArr.map((item) => ({
        tag: item.tag,
        count: item.links.length,
        link: item.links,
      }));
      setRows(rows);
    } else if (sortOrder === "DESCENDING") {
      const sortedTagListArr = [...filteredList].sort(
        (a, b) => b.links.length - a.links.length
      );
      const rows = sortedTagListArr.map((item) => ({
        tag: item.tag,
        count: item.links.length,
        link: item.links,
      }));
      setRows(rows);
    }
  }, [tagList, sortOrder, search]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="TableContainer">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <div className="topContainer">
          <div className="filters">
            <SelectSmall sortOrder={sortOrder} setSortOrder={setSortOrder} />
            <Search search={search} setSearch={setSearch} />
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className="tablePagination"
          />
        </div>
        <TableContainer className="TableContainer">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      background: "#121212",
                      color: "white",
                      borderColor: "rgb(213, 115, 79, .5)",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return <Row key={row.tag} columns={columns} row={row} />;
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default StickyHeadTable;
