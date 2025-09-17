import Search from "./components/Search/Search"
import Grid from "./components/Grid/Grid"
import { useState } from "react";

function App() {
    const [dropDownValue, setDropDownValue] = useState("");

  return (
    <>
      <div className="titleContainer">
        <h1 className="title"><span>OSRS</span>Bank planner</h1>
      </div>
    <section className="searchArea">
      <Search setDropDownValue={setDropDownValue}/>
    </section>
    <section className="gridArea">
      <Grid height="100px" width="90px" bankSlots={56} dropDownValue={dropDownValue}/>
    </section>
    <section><footer></footer></section>
    </>
  )
}

export default App
