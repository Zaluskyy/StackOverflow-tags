import React, { SetStateAction, useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { ISortOrder } from "../types/types";
import MediportaContext from "../context/context";

interface SelectSmallProps {
  sortOrder: ISortOrder;
  setSortOrder: React.Dispatch<SetStateAction<ISortOrder>>;
}
const SelectSmall: React.FC<SelectSmallProps> = ({
  sortOrder,
  setSortOrder,
}) => {
  const context = useContext(MediportaContext);
  const { mobile } = context;

  const handleChange = (event: SelectChangeEvent) => {
    setSortOrder(event.target.value as ISortOrder);
  };

  return (
    <FormControl style={{ width: mobile ? "30%" : 200 }} size="small">
      <InputLabel
        style={{ color: "rgba(255, 255, 255, 0.5)" }}
        id="demo-select-small-label"
      >
        Sort
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={sortOrder}
        label="Sort"
        onChange={handleChange}
        sx={{ color: "white" }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"ASCENDING"}>ASCENDING</MenuItem>
        <MenuItem value={"DESCENDING"}>DESCENDING</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectSmall;
