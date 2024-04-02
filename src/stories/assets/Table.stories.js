import StickyHeadTable from "../../components/Table";

export default {
  title: "Table",
  component: StickyHeadTable,
};

const tagList = [
  {
    tag: "c++",
    links: [
      "https://stackoverflow.com/questions/78263555/why-is-stdvector-slower-than-new-in-this-case",
    ],
  },
  {
    tag: "javascript",
    links: [
      "https://stackoverflow.com/questions/78263567/npx-expo-run-ios-failed-to-create-the-native-directory",
      "https://stackoverflow.com/questions/78263589/fetching-jquery-objects-in-selenium-with-javascript-self-answer",
    ],
  },
];

export const Template = () => <StickyHeadTable tagList={tagList} />;

// import LinksPopUp from "../../components/LinksPopUp";

// export default {
//   title: "Links pop up ",
//   component: LinksPopUp,
// };

// const singleLink = {
//   tag: "c++",
//   count: 1,
//   link: [
//     "https://stackoverflow.com/questions/78263555/why-is-stdvector-slower-than-new-in-this-case",
//   ],
// };
// const severalLinks = {
//   tag: "javascript",
//   count: 2,
//   link: [
//     "https://stackoverflow.com/questions/78263567/npx-expo-run-ios-failed-to-create-the-native-directory",
//     "https://stackoverflow.com/questions/78263589/fetching-jquery-objects-in-selenium-with-javascript-self-answer",
//   ],
// };

// const Template = (args) => <LinksPopUp {...args} />;

// export const single = Template.bind({});
// single.args = {
//   row: singleLink,
// };
// export const several = Template.bind({});
// several.args = {
//   row: severalLinks,
// };
