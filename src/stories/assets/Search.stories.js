import { useState } from "react";
import Search from "../../components/Search";

export default {
  title: "Search",
  component: Search,
};

export const Template = () => {
  const [search, setSearch] = useState();

  return <Search search={search} setSearch={setSearch} />;
};
