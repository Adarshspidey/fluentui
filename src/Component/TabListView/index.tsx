import * as React from "react";
import {
  makeStyles,
  shorthands,
  Tab,
  TabList,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    ...shorthands.padding("50px", "20px"),
    rowGap: "20px",
  },
});

const TabListView = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <TabList defaultSelectedValue="tab1">
        <Tab value="tab1">Action List</Tab>
        <Tab value="tab2">Clients</Tab>
        <Tab value="tab3">Reports</Tab>
        <Tab value="tab4">Utilities</Tab>
        <Tab value="tab5">Timer</Tab>
      </TabList>
    </div>
  );
};
export default TabListView;
