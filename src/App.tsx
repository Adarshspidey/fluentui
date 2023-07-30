import React, { useState } from "react";
import "./App.css";
import DataGrid from "./Component/DataGrid";
import TabListView from "./Component/TabListView";
import SidePopup from "./Component/SidePopup";
import Header from "./Component/Header";

function App() {
  const [click, setClick] = useState(false);
  return (
    <div>
      <Header />
      <div className="main-body-wrapper">
        <SidePopup />
        <div className="container">
          <TabListView />
          <DataGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
