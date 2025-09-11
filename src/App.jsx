import SearchBar from "./components/Search/SearchBar"
import Grid from "./components/Grid/Grid"

function App() {

  return (
    <>
      <div className="titleContainer">
        <h1 className="title"><span>OSRS</span>Bank planner</h1>
      </div>
    <section className="searchArea">
      <SearchBar/>
    </section>
    <section className="gridArea">
      <Grid height="100px" width="90px" bankSlots={56}/>
    </section>
    <section><footer></footer></section>
    </>
  )
}

export default App
