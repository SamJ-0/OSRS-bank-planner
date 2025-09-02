import SearchBar from "./components/SearchBar"
import Grid from "./components/Grid"
import BankTabs from "./components/BankTabs"

function App() {

  return (
    <>
      <div className="titleContainer">
        <h1 className="title"><span>OSRS</span>Bank planner</h1>
      </div>
    <section className="searchArea">
      <SearchBar/>
      <BankTabs />
    </section>
    <section className="gridArea">
      <Grid height="100px" width="100px" columns={8} numOfTiles={56}/>
    </section>
    <section><footer></footer></section>
    </>
  )
}

export default App
