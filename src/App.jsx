import Search from "./components/Search/Search"
import Grid from "./components/Grid/Grid"
import { useState } from "react";

function App() {
    const [searchValue, setSearchValue] = useState("");
    const [dropDownValue, setDropDownValue] = useState("");

    
const isAddItemComplete = (value) => {
    if(value === true) {
      setSearchValue("");
      setDropDownValue("");
    }
}

  return (
    <>
      <div className="titleContainer">
        <h1 className="title"><span>OSRS</span>Bank planner</h1>
      </div>
    <section className="searchArea">
      <Search setDropDownValue={setDropDownValue}/>
    </section>
    <section className="gridArea">
      <Grid height="100px" width="90px" bankSlots={56} dropDownValue={dropDownValue} isAddItemComplete={isAddItemComplete}/>
    </section>
    <section><footer></footer></section>
    </>
  )
}

export default App
