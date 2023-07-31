import React, { useState } from "react";
import "./App.css";
import DataGrid from "./Component/DataGrid";
import TabListView from "./Component/TabListView";
import SidePopup from "./Component/SidePopup";
import Header from "./Component/Header";
import SearchBoxFeild from "./Component/SearchBox";

function App() {
  const [click, setClick] = useState(false);
  return (
    <div>
      <Header />
      <div className="main-body-wrapper">
        <SidePopup />
        <div className="container">
          <TabListView />
          <SearchBoxFeild />
          <DataGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
