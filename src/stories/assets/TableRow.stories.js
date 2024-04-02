import Row from "../../components/TableRow";

export default {
  title: "Table Row",
  component: Row,
};

const columns = [
  {
    id: "tag",
    label: "tag",
    minWidth: 200,
  },
  {
    id: "count",
    label: "count",
    minWidth: 200,
  },
  {
    id: "link",
    label: "link",
    minWidth: 200,
  },
];

const singleRow = {
  tag: "c++",
  count: 1,
  link: [
    "https://stackoverflow.com/questions/78263555/why-is-stdvector-slower-than-new-in-this-case",
  ],
};
const severalRows = {
  tag: "javascript",
  count: 2,
  link: [
    "https://stackoverflow.com/questions/78263567/npx-expo-run-ios-failed-to-create-the-native-directory",
    "https://stackoverflow.com/questions/78263589/fetching-jquery-objects-in-selenium-with-javascript-self-answer",
  ],
};

const Template = (args) => <Row {...args} />;

export const single = Template.bind({});
single.args = {
  columns,
  row: singleRow,
};
export const several = Template.bind({});
several.args = {
  columns,
  row: severalRows,
};
