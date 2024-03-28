import React, { useContext, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import Row from "./TableRow";

import { Data, Column, TagItem } from "../types/types";
import MediportaContext from "../context/context";

const columns: readonly Column[] = [
  { id: "tag", label: "tag", minWidth: 170 },
  { id: "count", label: "count", minWidth: 100 },
  { id: "link", label: "link", minWidth: 200 },
];

// function createData(tag: string, count: number, link: string[]): Data {
//   return { tag, count, link };
// }

// const rows = [
//   createData("India", 1, ["linkacz kurwa", "chuj"]),
//   createData("China", 2, ["k"]),
//   createData("Italy", 3, ["sima", "jebać"]),
//   createData("United States", 4, ["dd"]),
//   createData("Canada", 2, ["linkacz kurwa"]),
//   createData("Australia", 2, ["linkacz kurwa"]),
//   createData("Germany", 2, ["linkacz kurwa"]),
//   createData("Ireland", 2, ["linkacz kurwa"]),
//   createData("Mexico", 2, ["linkacz kurwa"]),
//   createData("Japan", 2, ["linkacz kurwa"]),
//   createData("France", 2, ["linkacz kurwa"]),
//   createData("United Kingdom", 2, ["linkacz kurwa"]),
//   createData("Russia", 2, ["linkacz kurwa"]),
//   createData("Nigeria", 2, ["linkacz kurwa"]),
//   createData("Brazil", 2, ["linkacz kurwa"]),
// ];

export default function StickyHeadTable() {
  const context = useContext(MediportaContext);
  const { tagList } = context;

  const [rows, setRows] = useState<Data[]>([]);

  useEffect(() => {
    const tagListArr = tagList.map((item: TagItem) => {
      return { tag: item.tag, count: item.links.length, link: item.links };
    });
    setRows(tagListArr);
  }, [tagList]);

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
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return <Row key={row.tag} columns={columns} row={row} />;
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
