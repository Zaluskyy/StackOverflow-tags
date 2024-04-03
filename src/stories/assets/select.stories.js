import { useState } from "react";
import SelectSmall from "../../components/Select";

export default {
  title: "Select",
  component: SelectSmall,
};

export const Template = () => {
  const [sortOrder, setSortOrder] = useState();

  return <SelectSmall sortOrder={sortOrder} setSortOrder={setSortOrder} />;
};
